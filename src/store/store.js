import { combineReducers, createStore } from "redux"
import { loginReducer } from "./reducers/loginPageReducer";
import { homeReducer } from "./reducers/homePageReducer";

const reducers = combineReducers({
    loginPage: loginReducer,
    homePage: homeReducer,
})

const store = createStore(reducers);

export default store;
