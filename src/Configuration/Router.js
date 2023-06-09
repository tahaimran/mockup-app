import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/login";
import { Registration } from "../Components/Registrations/registration";
import { IngMaking }  from "../Components/Home/IngMaking/IngMaking"
import { Profile } from "../Components/Profile/Profile";
import { Privacypol } from "../Components/Home/Privacy Policy/Privacypol";

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Registration/>}></Route>
                <Route path='/login' element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/ing" element={<IngMaking/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path= "/profile/privpol" element={<Privacypol/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;