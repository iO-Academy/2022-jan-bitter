import './HomePage.scss'
import BleatFeed from "../../Molecules/BleatFeed/BleatFeed";
import NewBleat from "../../Molecules/NewBleat/NewBleat";
import Navbar from "../../Molecules/Navbar/Navbar";

const HomePage = (props) => {
    const apiFetch = async (url) => {
        let data = await fetch('http://127.0.0.1:3001'+url)
        return await data.json()
    }

    return(
        <>
            <Navbar apiFetch={props.apiFetch}/>
            <main className={'home-page-container'}>
                <div className={'page-header'}>
                    <h1>home</h1>
                </div>
                <div className={'write-bleat-container'}>
                    <NewBleat />
                </div>
                <div className={'bleats-feed-container'}>
                    <BleatFeed apiFetch={apiFetch}/>
                </div>
            </main>
        </>
    )
}

export default HomePage