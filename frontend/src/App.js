import './App.scss';
import React, {useEffect} from 'react';

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import LandingPage from "./Templates/LandingPage/LandingPage";
import ProfilePage from "./Templates/ProfilePage/ProfilePage";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { EmailPasswordAuth } from 'supertokens-auth-react/recipe/emailpassword';
import Welcome from "./Templates/Welcome/Welcome";
import Button from "./button/button";
import RedirectWelcome from "./Templates/RedirectWelcome/RedirectWelcome";

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

  return (

      <div>
        <BrowserRouter>
          <Routes>
            {/*This renders the login UI on the /auth route*/}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            {/*Your app routes*/}
              <Route path={'/'} element={<RedirectWelcome />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
