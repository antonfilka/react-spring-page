import { combineReducers, createStore } from "redux"
import { loginReducer } from "./loginPage-reducer";
import { homeReducer } from "./homePage-reducer";

const reducers = combineReducers({
    loginPage: loginReducer,
    homePage: homeReducer,
})

const store = createStore(reducers);

export default store;