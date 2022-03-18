import axios from "axios";

const SET_INPUT_USERNAME = "SET_INPUT_USERNAME"
const SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD"
const SET_WARNING = "SET_WARNING"
const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED"

export const setInputUsername = (payload) => ({type: SET_INPUT_USERNAME, payload});
export const setInputPassword = (payload) => ({type: SET_INPUT_PASSWORD, payload});
export const setWarning = (payload) => ({type: SET_WARNING, payload});
export const setIsAuthorized = (payload) => ({type: SET_IS_AUTHORIZED, payload});

export const getIsAuthorized = () => {
    return (dispatch, getState) => {
        console.log("Thunk has been called");
        axios.get("http://localhost:8080/api/isAuthorized", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => console.log(response.data.isAuth))
            .catch(error => console.log("Me error handling: " + response.data.isAuth))
    }
}