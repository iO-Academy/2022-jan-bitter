import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from "./Templates/LandingPage/LandingPage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={ <LandingPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing