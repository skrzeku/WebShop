import {combineReducers} from "redux";
import productsReducer from "./reducers/productsReducer";
import categoryReducer from "./reducers/CategoryReducer";


const rootReducer =combineReducers({
products: productsReducer,
    categories: categoryReducer
});


export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
