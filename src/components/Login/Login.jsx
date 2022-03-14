import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import classes from "./Login.module.css";
import clsx from "clsx";

const Login = ({setIsAuthorized}) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isWarning, setIsWarning] = useState(false);

    let navigate = useNavigate();
    const userData = {username: "admin", password: "1234"};

    const handlerButton = () => {
        if(inputUsername === userData.username && inputPassword === userData.password){
            navigate("/");
            setIsWarning(false); 
       } else {
            setInputUsername('');
            setInputPassword('');
            setIsWarning(true); 
       }
    }

    return (
    <div className={clsx(classes.login, {[classes.warning]: isWarning})}>
            <div className={classes.T1}>Authentification</div>
            <input placeholder="Username" value={inputUsername} onChange={e => setInputUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={inputPassword} onChange={e => setInputPassword(e.target.value)}/>
            <button onClick={ () => handlerButton() }>Sign in</button>
    </div>
    )
}

export default Login;