import {Action, FETCH_PRODUCTS_SUCCESS, IFetchPostsAction} from "../actions/productsActions";
import productsReducer, {IPost, IProduct} from "./productsReducer";


const initialState: IPost[] = [];



const  postReducer = (state = initialState, action: IFetchPostsAction)=> {
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return [
                ...action.posts
            ];
        default:
            return state;
    }
};


export default postReducer;