import Bleat from "../../Atoms/Bleat/Bleat";
import {useEffect, useState} from "react";


const BleatFeed = (props) => {
    const [bleats, setBleats] = useState([])


useEffect(() => {
    const fetchAllBleats = async () => {
        let response = await props.apiFetch('/bleats')
        setBleats(response.data)
    }
    fetchAllBleats()
}, [props.reloadBleats])

    return (
        <>
            {bleats.map((bleat) => <Bleat username={bleat.username} bleat={bleat.bleat} bleat_time={bleat.bleat_time} />)}
        </>

    )
}


export default BleatFeed