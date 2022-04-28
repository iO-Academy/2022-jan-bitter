import express from 'express';
import cors from "cors";
import { middleware } from "supertokens-node/framework/express/index.js";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { errorHandler } from "supertokens-node/framework/express/index.js";
import queryDb from "./scripts/queryDb.js";


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
    credentials: true,
}));

app.use(middleware());
app.use(express.json())
// ...your API routes

app.get('/bleats', async (req, res) => {

    let jsonResponse
    if(req.query.userId) {
        let urlUserId = req.query.userId
        const userIdQuery = 'SELECT `bleat`, `bleat_time`, `username`, `bleat_user_id`\n' +
            'FROM `bleats`\n' +
            'LEFT JOIN `user_data`\n' +
            'ON `bleats`.`bleat_user_id` = `user_data`.`user_id`\n' +
            'WHERE `bleats`.`bleat_user_id` = "' + urlUserId + '"' +
            'ORDER BY `bleat_time` DESC'
        jsonResponse = await queryDb(userIdQuery)
    } else {
        const query = 'SELECT * FROM `bleats` ORDER BY `bleat_time` DESC'
        const bleats = await queryDb(query)
        jsonResponse = bleats
    }

    res.json(jsonResponse)
})

app.post('/bleats', async (req, res) => {
    const bleat = req.body.bleat
    const userId = req.body.userId
    const bleatTime = Math.floor(+new Date() / 1000)
    const query = 'INSERT INTO `bleats`(`bleat_user_id`, `bleat`, `bleat_time`) VALUES ("' + userId + '", "' + bleat + '", "' + bleatTime + '")'
    const data = await queryDb(query)
    res.json(data)
})



// Add this AFTER all your routes
app.use(errorHandler())

app.listen(port)