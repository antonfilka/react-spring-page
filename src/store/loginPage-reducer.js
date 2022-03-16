const SET_INPUT_USERNAME = "SET-INPUT-USERNAME"
const SET_INPUT_PASSWORD = "SET-INPUT-PASSWORD"
const SET_WARNING = "SET-WARNING"
const SET_IS_AUTHORIZED = "SET-IS-AUTHORIZED"

const initialState = {
    isAuthorized: false,
    inputUsername: '',
    inputPassword: '',
    isWarning: false,
    userData: {username: "admin", password: "1234"},
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INPUT_USERNAME: {
            return({...state, inputUsername: action.username})
        }
        case SET_INPUT_PASSWORD:{
            return ({...state, inputPassword: action.password})
        }
        case SET_WARNING:{
            return ({...state, isWarning: action.isWarning})
        }
        case SET_IS_AUTHORIZED:{
            return ({...state, isAuthorized: action.isAuthorized})
        }
        default:
            return state;
    }
}

export const setInputUsername = (username) => ({type: SET_INPUT_USERNAME, username});
export const setInputPassword = (password) => ({type: SET_INPUT_PASSWORD, password});
export const setWarning = (isWarning) => ({type: SET_WARNING, isWarning});
export const setIsAuthorized = (isAuthorized) => ({type: SET_IS_AUTHORIZED, isAuthorized});
