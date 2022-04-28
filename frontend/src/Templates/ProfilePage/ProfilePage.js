import './ProfilePage.scss'
import Navbar from "../../Molecules/Navbar/Navbar";

const ProfilePage = (props) => {
    return (
        <div className="profile-page-container">
            <Navbar />
            <header className="profile-page-header">

                <img className="profile-image" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <div className="profile-page-about-section">
                    <h1 className="profile-page-h1">@losername</h1>
                    <p className="profile-page-p">Really interesting about me section</p>
                </div>
            </header>
            <main className="profile-page-bleats-container">
                <div className="bleats-title">
                    <h2 className="profile-page-h2">Bleats</h2>
                </div>
                <div className="bleats-container">
                    <p className="bleats-container-p">Your bleats go here!</p>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage