const SET_INPUT_USERNAME = "SET_INPUT_USERNAME"
const SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD"
const SET_WARNING = "SET_WARNING"
const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED"
const SET_USER = "SET_USER"
const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN"

const initialState = {
    user: {
        userId: null,
        username: '', 
        firstName: '',
        lastName: '',
        age: null  
    },
    accessToken: '',
    refreshToken: '',
    isAuth: false,
    inputUsername: '',
    inputPassword: '',
    isWarning: false,
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
            return ({...state, isAuth: action.payload})
        }
        case SET_USER:{
            return ({...state, user: action.payload})
        }
        case SET_REFRESH_TOKEN:{
            return ({...state, refreshToken: action.payload})
        }
        default:
            return state;
    }
}
