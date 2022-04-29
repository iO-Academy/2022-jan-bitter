import './HomePage.scss'
import BleatFeed from "../../Molecules/BleatFeed/BleatFeed";
import NewBleat from "../../Molecules/NewBleat/NewBleat";
import Navbar from "../../Molecules/Navbar/Navbar";
import {useState} from "react";

const HomePage = (props) => {
    const [reloadBleats, setReloadBleats] = useState(false)

    const apiFetch = async (url) => {
        let data = await fetch('http://127.0.0.1:3001'+url)
        return await data.json()
    }

    return(
        <div className={'homepage-body'}>
            <Navbar apiFetch={props.apiFetch}/>
            <main className={'home-page-container'}>
                <div className={'page-header'}>
                    <h1>home</h1>
                </div>
                <div className={'write-bleat-container'}>

                    <NewBleat setReloadBleats={setReloadBleats} reloadBleats={reloadBleats}/>
                </div>
                <div className={'bleats-feed-container'}>
                    <BleatFeed apiFetch={apiFetch} setRealoadBleats={setReloadBleats} reloadBleats={reloadBleats}/>
                </div>
            </main>
        </div>
    )
}

export default HomePage