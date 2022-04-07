import {IProduct, IProducts} from "../reducers/productsReducer";
import {ICategory} from "../reducers/CategoryReducer";

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export interface IFetchProductsAction {
    type: string,
    products: IProduct[]
}

export interface IFetchCategoriesAction {
    type: string,
    categories: ICategory[]
}



export const fetchProductsSuccess = (products : IProducts) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
};

export const fetchCategorySuccess = (categories : ICategory[]) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        categories: categories

    }
};