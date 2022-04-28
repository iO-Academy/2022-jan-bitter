import './App.scss';
import React from 'react';

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import LandingPage from "./Templates/LandingPage/LandingPage";
import ProfilePage from "./Templates/ProfilePage/ProfilePage";


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
            placeholder: "Put something smart..."
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

  const apiFetch = async (url) => {
    let data = await fetch(url)
    let jsonData = await data.json()
    return jsonData
  }

  const fetchUserDetails = async () => {
    let response = await apiFetch('http://localhost:3000/users')
    return response
  }

  return (
      <div>
        <BrowserRouter>
          <Routes>
            {/*This renders the login UI on the /auth route*/}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            {/*Your app routes*/}
            <Route exact path={'/'} element={ <LandingPage /> } />
            <Route exact path={'/Profile'} element={ <ProfilePage/> } />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
