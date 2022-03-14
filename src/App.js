import './App.css';
import React, {useEffect, useState} from 'react'
import { useNavigate} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import Login from "./components/Login/Login"

import {Routes, Route} from "react-router-dom";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    let navigate = useNavigate();

    
    useEffect (() => {
        isAuthorized ? navigate("/") : navigate("/login")
    }, [isAuthorized])

    useEffect(() => {
        window.onbeforeunload = function() {
            setIsAuthorized(false);
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login setIsAuthorized={setIsAuthorized}/>}/>
            </Routes>
        </div>
        
    );
}

export default App;
 