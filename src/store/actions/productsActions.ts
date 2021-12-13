import {IProduct, IProducts} from "../reducers/productsReducer";

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export interface IFetchProductsAction {
    type: string,
    products: IProduct[]
}



export const fetchProductsSuccess = (products : IProducts) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
};