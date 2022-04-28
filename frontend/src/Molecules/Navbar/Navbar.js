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
                <div>
                    <a>
                        <img className="profile-icon" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                        <p className="my-profile-p">My Profile</p>
                    </a>
                </div>
                <div>
                    <a>
                        <BittrLogo style={"navbar-logo"}/>
                        <p className="home-p">Home</p>
                    </a>
                </div>
                <div className="log-out-button-container">
                    <a onClick={handleClick}>
                        <img className="logout-icon" src="images/back-button-icon.png" alt="Profile image placeholder"/>
                        <p className="logout-p">Logout</p>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
