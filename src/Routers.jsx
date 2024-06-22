import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>
        </Router>
    )
}

export default Routers;