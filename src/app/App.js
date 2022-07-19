import React from "react";
import {Routes, Route} from "react-router-dom";
import LoginScreen from "../pages/session/LoginScreen";
import LoginScreenTwo from "../pages/session/LoginScreenTwo";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<LoginScreen/>}/>
            <Route exact path='loginScreenTwo' element={<LoginScreenTwo/>}/>
        </Routes>
    );
}

export default App;