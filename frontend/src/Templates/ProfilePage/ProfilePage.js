import './ProfilePage.scss'
import Navbar from "../../Molecules/Navbar/Navbar";
import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';

const ProfilePage = (props) => {

    let { username } = useParams()

    const [losername, setLosername] = useState(username)
    const [bio, setBio] = useState("")
    const [bleats, setBleats] = useState([])

    useEffect(  () => {
        const fetchUserProfileDate = async () => {
            let response = await props.apiFetch('/username/' + username)
            setLosername(username)
            setBio(response.data[0].user_bio)
        }
        fetchUserProfileDate()
        const retrieveUserBleats = async () => {
            let response = await props.apiFetch('/bleats/' + username)
            setBleats(response.data[0])
        }
        retrieveUserBleats()
    }, [])

    return (
        <div className="profile-page-container">
            <Navbar />
            <header className="profile-page-header">

                <img className="profile-image" src="images/profile-icon-placeholder.png" alt="Profile image placeholder"/>
                <div className="profile-page-about-section">
                    <h1 className="profile-page-h1">@{losername}</h1>
                    <p className="profile-page-p">{bio}</p>
                </div>
            </header>
            <main className="profile-page-bleats-container">
                <div className="bleats-title">
                    <h2 className="profile-page-h2">Bleats</h2>
                </div>
                {/*<div className="bleats-container">*/}
                {/*    {bleats.map((bleat) => <Bleat username={bleat.username} bleat={bleat.bleat} bleat_time={bleat_time}/>})*/}
                {/*</div>*/}
            </main>
        </div>
    )
}

export default ProfilePage