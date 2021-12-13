import {applyMiddleware, createStore} from "redux";
import reducers from "../tests";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools (applyMiddleware(thunkMiddleware))


);