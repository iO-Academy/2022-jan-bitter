import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import LandingPage from "../LandingPage/LandingPage";
import Session, {useSessionContext} from "supertokens-auth-react/recipe/session";
import {getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import React, {useState} from "react"
import {useEffect} from "react";

const Welcome = () => {

    const [userId, setUserId] = useState(undefined)

    // let {doesSessionExist} = useSessionContext()

    useEffect(async () => {
        if (await Session.doesSessionExist()){
            setUserId(Session.getUserId())
        }
    },[])
    console.log(userId)

    if(userId === undefined) {
        return (
            <h1>Landing Page</h1>
            // <LandingPage />
        )
    } else {

        return (
            <h1>profile</h1>
            // <ProfilePage />
        )
    }

}
export default Welcome

