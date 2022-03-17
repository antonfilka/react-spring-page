import './App.css';
import React, {useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import Login from "./components/Login/Login"
import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setIsAuthorized} from "./store/actions/loginPageActions"

const App = () => {
    const isAuthorized = useSelector(state => state.loginPage.isAuthorized)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect (() => {
        isAuthorized ? navigate("/") : navigate("/login")
    }, [isAuthorized])

    useEffect(() => {
        window.onbeforeunload = function() {
            dispatch(setIsAuthorized(false));
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
          

        </div>
        
    );
}

export default App;
