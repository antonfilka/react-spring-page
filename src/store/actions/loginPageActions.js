import api from "../../http/RequestAPI"

const SET_INPUT_USERNAME = "SET_INPUT_USERNAME"
const SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD"
const SET_WARNING = "SET_WARNING"
const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED"
const SET_USER = "SET_USER"
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"
const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN"

export const setInputUsername = (payload) => ({type: SET_INPUT_USERNAME, payload});
export const setInputPassword = (payload) => ({type: SET_INPUT_PASSWORD, payload});
export const setWarning = (payload) => ({type: SET_WARNING, payload});
export const setIsAuthorized = (payload) => ({type: SET_IS_AUTHORIZED, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const setAccessToken = (payload) => ({type: SET_ACCESS_TOKEN, payload});
export const setRefreshToken = (payload) => ({type: SET_REFRESH_TOKEN, payload});


export const login = (username, password) => {
    return (dispatch, getState) => {
        api.post('/login', {username, password}).then(response => {
            dispatch(setUser(response.data.user));
            dispatch(setAccessToken(response.data.accessToken));
            dispatch(setRefreshToken(response.data.refreshToken));
            dispatch( setIsAuthorized(true));
            localStorage.setItem('token', response.data.accessToken);
        }).catch(error => alert(error.response?.data?.message))
    }
}


export const registration = (username, password, confirmPassword, firstName, lastName, age) => {
    return (dispatch, getState) => {
        api.post('/registration', {username, password, confirmPassword, firstName, lastName, age}).then(response => {
            dispatch(setUser(response.data.user));
            dispatch(setAccessToken(response.data.accessToken));
            dispatch(setRefreshToken(response.data.refreshToken));
            dispatch( setIsAuthorized(true));
            localStorage.setItem('token', response.data.accessToken);
        }).catch(error => alert(error.response?.data?.message))
    }
}


export const logout = (username, password) => {
    return (dispatch, getState) => {
        api.post('/logout').catch(error => alert(error.response?.data?.message))
            dispatch(setUser({}));
            dispatch(setIsAuthorized(false));
            localStorage.removeItem('token');
    }
} 