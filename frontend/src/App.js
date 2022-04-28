import './App.scss';
import React from 'react';

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import RedirectWelcome from "./Templates/RedirectWelcome/RedirectWelcome";
import HomePage from "./Templates/HomePage/HomePage";

const apiFetch = async (url) => {
  let data = await fetch('http://127.0.0.1:3001'+url)
  return await data.json()
}

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "bittr",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        signUpForm: {
          formFields: [{
            id: "username",
            label: "Losername",
            placeholder: "Put something smart...",
            validate: async (value) => {
              let response = await apiFetch('/username/' + value)
              if (response.status !== 200) {
                return undefined; // means that there is no error
              }
              return "This username is already taken";
            }
          }]
        }
      },
      palette: {
        primary: 'yellow',
        buttonText: 'black'
      }
    }),
    Session.init()
  ]
});

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            {/*This renders the login UI on the /auth route*/}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            {/*Your app routes*/}
              <Route path={'/'} element={<RedirectWelcome />} />
              <Route path={'/HomePage'} element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
