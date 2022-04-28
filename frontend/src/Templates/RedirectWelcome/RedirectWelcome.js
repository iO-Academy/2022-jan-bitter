import React from "react";
import Welcome from "../Welcome/Welcome";
import {EmailPasswordAuth} from "supertokens-auth-react/recipe/emailpassword";

const RedirectWelcome = () => {
    return(
        <>
            <EmailPasswordAuth requireAuth={false}>
                <Welcome />
            </EmailPasswordAuth>
        </>

    )
}
export default RedirectWelcome