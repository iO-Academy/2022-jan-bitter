import ProfileAbout from "../../Molecules/ProfileAbout/ProfileAbout";
import ProfileImage from "../../Atoms/ProfileImage/ProfileImage";
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <>
            {/*<Navbar />*/}
            <nav class="profile-page-navbar">
                <img class="nav-icon" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <img class="nav-logo" src="images/Bittr-logo-no-text.png" alt="Bittr Logo"/>
                <img class="nav-icon" src="images/back-button-icon.png" alt="Back Button"/>
            </nav>
            <header class="profile-page-header">
                {/*<ProfileImage />*/}
                {/*<ProfileAbout />*/}
                <img class="profile-image" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <div class="profile-page-about-section">
                    <h1>@Loosername</h1>
                    <p>Really interesting about me section</p>
                </div>
            </header>
            <main>
                <div>
                    <h2>Bleats</h2>
                </div>
                <div>
                    <p>Your bleats go here!</p>
                </div>
            </main>
        </>
    )
}

export default ProfilePage