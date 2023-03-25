import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/login";
import { Registration } from "../Components/Registrations/registration";

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Registration/>}></Route>
                <Route path='/login' element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;