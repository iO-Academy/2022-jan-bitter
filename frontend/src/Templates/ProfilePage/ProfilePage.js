import ProfileAbout from "../../Molecules/ProfileAbout/ProfileAbout";
import ProfileImage from "../../Atoms/ProfileImage/ProfileImage";
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            {/*<Navbar />*/}
            <nav className="profile-page-navbar">
                <img className="nav-icon" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <img className="nav-logo" src="images/Bittr-logo-no-text.png" alt="Bittr Logo"/>
                <img className="nav-icon" src="images/back-button-icon.png" alt="Back Button"/>
            </nav>
            <header className="profile-page-header">
                {/*<ProfileImage />*/}
                {/*<ProfileAbout />*/}
                <img className="profile-image" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <div className="profile-page-about-section">
                    <h1>@Losername</h1>
                    <p>Really interesting about me section</p>
                </div>
            </header>
            <main>
                <div className="bleats-title">
                    <h2>Bleats</h2>
                </div>
                <div className="bleats-container">
                    <p>Your bleats go here!</p>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage