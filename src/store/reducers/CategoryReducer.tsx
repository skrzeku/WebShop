import React from 'react';
import {Action, FETCH_PRODUCTS_SUCCESS, IFetchCategoriesAction} from "store/actions/productsActions";
import { IGallery, IPost, IProduct, IProductVariant} from "store/reducers/productsReducer";

export interface ICategory {
    id: number;
    Name: string;
    products: IProduct[],
    thumbnail: IGallery;
    // variants: ProductVariant[];
}

const initialState: ICategory[] = [];




const  categoryReducer = (state = initialState, action: IFetchCategoriesAction)=> {
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