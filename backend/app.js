import express from 'express';
import cors from "cors";
import { middleware } from "supertokens-node/framework/express/index.js";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { errorHandler } from "supertokens-node/framework/express/index.js";
import queryDb from "./scripts/queryDb.js";
import mysql from "promise-mysql";
import connection from "express";


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

// ...your API routes
app.get('/users', async (req, res) => {
    let users = await queryDb('SELECT * FROM `user_data`')
    res.json(users)
})
app.use(errorHandler())



// Add this AFTER all your routes
app.use(errorHandler())

app.listen(port)