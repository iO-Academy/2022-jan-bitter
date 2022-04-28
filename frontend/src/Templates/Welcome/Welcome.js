import LandingPage from "../LandingPage/LandingPage";
import React from "react"
import {useSessionContext} from "supertokens-auth-react/recipe/session";

const Welcome = () => {

    let {doesSessionExist} = useSessionContext();

    return(
        <>
            {(doesSessionExist) ? (<h1>Profile page</h1>) : (<LandingPage />)}
        </>

    )

}
export default Welcome

