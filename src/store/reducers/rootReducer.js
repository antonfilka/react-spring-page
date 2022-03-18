import { combineReducers} from "redux"
import { loginReducer } from "./loginPageReducer";
import { homeReducer } from "./homePageReducer";

export const rootReducer = combineReducers({
    loginPage: loginReducer,
    homePage: homeReducer,
})
