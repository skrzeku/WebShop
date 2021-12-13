
import {FETCH_PRODUCTS_SUCCESS} from 'store/actions/productsActions';
import {IFetchProductsAction} from "../actions/productsActions";



export interface IProduct {
    id: string;
    category: string[];
    title: string;
    // variants: ProductVariant[];
}

export interface IProducts {
    products: any[];
}

export type Action = IFetchProductsAction;


const initialState: IProducts[] = [];


const  productsReducer = (state = initialState, action: Action)=> {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return [
                ...action.products
            ];
        default:
            return state;
    }
}

// export const getProducts = state => state.products;
export default productsReducer;