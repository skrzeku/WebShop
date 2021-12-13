import {applyMiddleware, createStore} from "redux";
import reducers from "./index";
import thunkMiddleware from "redux-thunk";


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunkMiddleware)
);