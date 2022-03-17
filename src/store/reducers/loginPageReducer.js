const SET_INPUT_USERNAME = "SET_INPUT_USERNAME"
const SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD"
const SET_WARNING = "SET_WARNING"
const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED"

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
            return({...state, inputUsername: action.payload})
        }
        case SET_INPUT_PASSWORD:{
            return ({...state, inputPassword: action.payload})
        }
        case SET_WARNING:{
            return ({...state, isWarning: action.payload})
        }
        case SET_IS_AUTHORIZED:{
            return ({...state, isAuthorized: action.payload})
        }
        default:
            return state;
    }
}
