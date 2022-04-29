import {IPost, IProduct, IProducts} from "../reducers/productsReducer";
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

export interface IFetchPostsAction {
    type: string,
    posts: IPost[]
}
export interface IPosts {
    posts: IPost[]
}


//to correct!
export type Action = IFetchProductsAction | IFetchPostsAction | IFetchCategoriesAction;




export const fetchProductsSuccess = (products : IProduct[]) => {
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

export const fetchPostsSuccess = (posts : IPosts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts: posts
    }
};