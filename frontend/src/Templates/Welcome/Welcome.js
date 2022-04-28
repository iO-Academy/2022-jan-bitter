import LandingPage from "../LandingPage/LandingPage";
import React from "react"
import {useSessionContext} from "supertokens-auth-react/recipe/session";
import BleatFeed from "../../Molecules/BleatFeed/BleatFeed";

const Welcome = (props) => {

    let {doesSessionExist} = useSessionContext();

    return(
        <>
            {(doesSessionExist) ? (<BleatFeed apiFetch={props.apiFetch}/>) : (<LandingPage />)}
        </>

    )

}
export default Welcome

