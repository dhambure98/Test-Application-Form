import React from "react";
import {Routes, Route} from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import LoginScreenTwo from "../pages/session/LoginScreenTwo";
import LoginScreenThree from "../pages/session/LoginScreenThree"
import HomePageOne from "../pages/HomePageOne/HomePageOne"

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<LoginScreen/>}/>
            <Route exact path='loginScreenTwo' element={<LoginScreenTwo/>}/>
            <Route exact path='loginScreenThree' element={<LoginScreenThree/>}/>
            <Route exact path='home-page-one' element={<HomePageOne/>}/>
        </Routes>
    );
}

export default App;