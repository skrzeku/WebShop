import React from 'react';
import {FETCH_PRODUCTS_SUCCESS, IFetchCategoriesAction} from "../actions/productsActions";
import {Action, IGallery, IPost, IProduct, IProductVariant} from "./productsReducer";

export interface ICategory {
    id: number;
    Name: string;
    products: IProduct[],
    thumbnail: IGallery;
    // variants: ProductVariant[];
}



const  categoryReducer = (state = [], action: IFetchCategoriesAction)=> {
    switch(action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return [
                ...action.categories
            ];
        default:
            return state;
    }
};


export default categoryReducer;