import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import LandingPage from "../LandingPage/LandingPage";
import Session, {useSessionContext} from "supertokens-auth-react/recipe/session";
import {getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import React, {useState} from "react"
import {useEffect} from "react";

const Welcome = () => {

    let {doesSessionExist} = useSessionContext();

    return(
        <>
            {(doesSessionExist) ? (<ProfilePage />) : (<LandingPage />)}
        </>

    )

}
export default Welcome

