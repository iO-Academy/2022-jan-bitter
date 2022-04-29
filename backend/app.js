import express from 'express';
import cors from "cors";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { middleware, errorHandler} from "supertokens-node/framework/express/index.js";
import {verifySession} from "supertokens-node/recipe/session/framework/express/index.js"
import queryDb from "./scripts/queryDb.js";
import validator from 'validator'
import createApiResponse from "./scripts/formatApiResponse.js";

supertokens.init({
    framework: "express",
    supertokens: {
        // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "http://localhost:3567",
        // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "bittr",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init({
            signUpFeature: {
                formFields: [{
                    id: "username"
                }]
            },
            override: {
                apis: (originalImplementation) => {
                    return {
                        ...originalImplementation,
                        signUpPOST: async function (input) {

                            if (originalImplementation.signUpPOST === undefined) {
                                throw Error("Should never come here");
                            }

                            // First we call the original implementation of signUpPOST.
                            let response = await originalImplementation.signUpPOST(input);

                            // Post sign up response, we check if it was successful
                            if (response.status === "OK") {

                                // These are the input form fields values that the user used while signing up
                                let formFields = input.formFields;

                                let userId = response.user.id
                                let username = formFields[2].value
                                await queryDb('INSERT INTO `user_data` (`user_id`,`username`) VALUES ("' + userId + '", "' + username + '")')
                            }
                            return response;
                        }
                    }
                }
            }
        }), // initializes signin / sign up features
        Session.init() // initializes session features
    ]
});


let app = express();
const port = 3001

// ...other middlewares
app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
}));

app.use(middleware());
app.use(express.json())
// ...your API routes

app.get("/sessioninfo", verifySession(), async(req, res) => {
    debugger;
    // let session = await Session.getSession(req, res);
    // let data = await session.getSessionData()

    let session = req.session
    let userId = req.session.getUserId()
    console.log(userId)

    // console.log('Session', Session.getSession(req, res));
    res.send({
        sessionHandle: session.getHandle(),
        userId: session.getUserId(),
        accessTokenPayload: session.getAccessTokenPayload(),
    });
});

app.get('/username/:username', async (req, res) => {
    const username = req.params.username
    const query = 'SELECT `user_bio` FROM `user_data` WHERE `username` = "' + username + '"'
    const data = await queryDb(query)
    if (data.length === 0) {
        res.json(createApiResponse(404, 'No such user', data))
    } else {
        res.json(createApiResponse(200, 'User data retrieved', data))
    }
})

app.get('/userId/:userId', async (req, res) => {
    const userId = req.params.userId
    const query = 'SELECT `username`, `user_bio` FROM `user_data` WHERE `user_id` = "' + userId + '"'
    const data = await queryDb(query)
    if (data.length === 0) {
        res.json(createApiResponse(404, 'No such user', data))
    } else {
        res.json(createApiResponse(200, 'User data retrieved', data))
    }
})

app.post('/username/:username', async (req, res) => {
    const bio = req.body.user_bio
    const sanitisedBio = validator.escape(bio)
    const username = req.body.username
    const query = 'UPDATE `user_data` SET `user_bio` = "' + sanitisedBio + '" WHERE `username` = "' + username + '";'
    const data = await queryDb(query)
    res.json(createApiResponse(200, 'Bio received', data))
})

app.get('/bleats', async (req, res) => {

    let jsonResponse
    if(req.query.username) {
        let urlUsername = req.query.username
        const usernameQuery = 'SELECT `bleat`, `bleat_time`, `username`, `bleat_user_id`\n' +
            'FROM `bleats`\n' +
            'LEFT JOIN `user_data`\n' +
            'ON `bleats`.`bleat_user_id` = `user_data`.`user_id`\n' +
            'WHERE `user_data`.`username` = "' + urlUsername + '"' +
            'ORDER BY `bleat_time` DESC'
        jsonResponse = await queryDb(usernameQuery)
    } else {
        const query = 'SELECT `bleat`, `bleat_time`, `username`, `bleat_user_id`\n' +
            'FROM `bleats`\n' +
            'LEFT JOIN `user_data`\n' +
            'ON `bleats`.`bleat_user_id` = `user_data`.`user_id`\n' +
            'ORDER BY `bleat_time` DESC'
        const bleats = await queryDb(query)
        jsonResponse = bleats
    }

    if (jsonResponse.length === 0) {
        res.json(createApiResponse(404, 'No bleats found', jsonResponse))
    } else {
        res.json(createApiResponse(200, 'Bleats retrieved', jsonResponse))
    }
})

app.post('/bleats', verifySession(), async (req, res) => {
    const bleat = req.body.bleat
    const sanitisedBleat = validator.escape(bleat)

    if (sanitisedBleat.length > 250) {
        res.json(createApiResponse(400, 'Bleats cannot be longer than 250 characters.'))
    }
    const userId = req.session.getUserId()
    const bleatTime = Math.floor(+new Date() / 1000)
    const query = 'INSERT INTO `bleats`(`bleat_user_id`, `bleat`, `bleat_time`) VALUES ("' + userId + '", "' + sanitisedBleat + '", "' + bleatTime + '")'
    const data = await queryDb(query)
    res.json(createApiResponse(200, 'Bleat posted', data))

})

// Add this AFTER all your routes
app.use(errorHandler())

app.listen(port)