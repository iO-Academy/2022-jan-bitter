import {useSessionContext} from "supertokens-auth-react/recipe/session";
import React from "react";
import Welcome from "../Welcome/Welcome";
import {EmailPasswordAuth} from "supertokens-auth-react/recipe/emailpassword";

const RedirectWelcome = () => {

    let {doesSessionExist} = useSessionContext();

    return(
        <>
            <EmailPasswordAuth requireAuth={false}>
                <Welcome />
            </EmailPasswordAuth>
        </>

    )

}
export default RedirectWelcome