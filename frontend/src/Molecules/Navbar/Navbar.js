import React from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import './Navbar.scss'
import BittrLogo from "../../Atoms/BittrLogo/BittrLogo";

const Navbar = () => {

    const handleClick = () => {
        async function onLogout() {
            await signOut();
            window.location.href = "/";
        }
    }

    return (
        <>
            <nav className="profile-page-navbar">
                <img className="profile-icon" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <BittrLogo style={"profile-page-logo"}/>
                <div className="log-out-button-container">
                    <a onClick={handleClick}>
                        <img className="logout-icon" src="images/back-button-icon.png" alt="Profile image placeholder"/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
