import React from "react";
import Welcome from "../Welcome/Welcome";
import {EmailPasswordAuth} from "supertokens-auth-react/recipe/emailpassword";
import BleatFeed from "../../Molecules/BleatFeed/BleatFeed";

const RedirectWelcome = (props) => {
    return(
        <>
            <EmailPasswordAuth requireAuth={false}>
                <Welcome  apiFetch={props.apiFetch}/>
            </EmailPasswordAuth>
        </>

    )
}
export default RedirectWelcome