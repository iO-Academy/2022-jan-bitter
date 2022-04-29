import LandingPage from "../LandingPage/LandingPage";
import React from "react"
import {useSessionContext} from "supertokens-auth-react/recipe/session";
import HomePage from "../HomePage/HomePage";

const Welcome = (props) => {

    let {doesSessionExist} = useSessionContext();

    return(
        <>
            {(doesSessionExist) ? (<HomePage />) : (<LandingPage />)}
        </>

    )

}
export default Welcome

