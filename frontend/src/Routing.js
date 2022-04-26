import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from "./Templates/LandingPage/LandingPage";
import ProfilePage from "./Templates/ProfilePage/ProfilePage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={ <LandingPage /> } />
                <Route path={'/Profile'} element={ <ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing