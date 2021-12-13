import {combineReducers} from "redux";
import productsReducer from "./reducers/productsReducer";


const rootReducer =combineReducers({
products: productsReducer
});


export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
