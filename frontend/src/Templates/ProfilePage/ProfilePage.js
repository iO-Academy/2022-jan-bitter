import ProfileAbout from "../../Molecules/ProfileAbout/ProfileAbout";
import ProfileImage from "../../Atoms/ProfileImage/ProfileImage";
import './ProfilePage.scss'
import Navbar from "../../Molecules/Navbar/Navbar";

const ProfilePage = (props) => {
    return (
        <div className="profile-page-container">
            <Navbar />
            <header className="profile-page-header">
                {/*<ProfileImage />*/}
                {/*<ProfileAbout />*/}
                <img className="profile-image" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <div className="profile-page-about-section">
                    <h1 className="username">@losername</h1>
                    <p>Really interesting about me section</p>
                </div>
            </header>
            <main className="profile-page">
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