import { applyMiddleware, createStore } from "redux"
import { thunkMiddleware } from "./middleware/thunkMiddleware";
import { rootReducer } from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
