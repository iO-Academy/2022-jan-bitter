import React from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import './Navbar.scss'
import BittrLogo from "../../Atoms/BittrLogo/BittrLogo";

const Navbar = (props) => {

    async function onLogout() {
        await signOut();
        window.location.href = "/";
    }

    const navigateToProfile = async () => {
        let response = await props.apiFetch('/getUserId/')
        let userName = await response.data[0].username
        window.location.href = "/" + userName;
    }

    return (
        <>
            <nav className="profile-page-navbar">
                <div className={'nav-content'}>
                    <a onClick={navigateToProfile}>
                        <img className="profile-icon" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                        <p className="my-profile-p">My Profile</p>
                    </a>
                </div>
                <div className={'nav-content'}>
                    <a>
                        <BittrLogo style={"navbar-logo"}/>
                        <p className="home-p">Home</p>
                    </a>
                </div>
                <div className="log-out-button-container nav-content">
                    <a onClick={onLogout}>
                        <img className="logout-icon" src="images/back-button-icon.png" alt="Profile image placeholder"/>
                        <p className="logout-p">Logout</p>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
