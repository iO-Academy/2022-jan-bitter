import Button from "../../Atoms/Button/Button";
import React from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import './Navbar.scss'

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
                <img className="nav-logo" src="images/Bittr-logo-no-text.png" alt="Bittr Logo"/>
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
