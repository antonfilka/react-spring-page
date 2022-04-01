import './App.css';
import React, {useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "./store/actions/loginPageActions";

const App = () => {
    const isAuth = useSelector(state => state.loginPage.isAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect (() => {
        isAuth ? navigate("/") : navigate("/login")
    }, [isAuth])

    useEffect(() => {
        window.onbeforeunload = function() {
            dispatch(logout());
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
                <Route path='/registration' element={<SignUp/>}/>
            </Routes>
        </div>
        
    );
}

export default App;
