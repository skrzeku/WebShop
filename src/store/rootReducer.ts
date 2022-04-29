import {combineReducers} from "redux";
import productsReducer from "./reducers/productsReducer";
import categoryReducer from "./reducers/CategoryReducer";
import postReducer from "./reducers/postReducer";


const rootReducer = combineReducers({

    categories: categoryReducer,
    posts: postReducer,
    products: productsReducer
});


export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
