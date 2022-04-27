import ProfileAbout from "../../Molecules/ProfileAbout/ProfileAbout";
import ProfileImage from "../../Atoms/ProfileImage/ProfileImage";
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <div>
            <Navbar />
            <header>
                <ProfileImage />
                <ProfileAbout />
            </header>
            <main>
                <h2>Bleats</h2>
                <div>
                    <p>Your bleats go here!</p>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage