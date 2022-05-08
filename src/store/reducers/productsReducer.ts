
import {Action, FETCH_PRODUCTS_SUCCESS} from 'store/actions/productsActions';
import {IFetchProductsAction} from "../actions/productsActions";
import {ICategory} from "src/store/reducers/CategoryReducer";


interface IThumbnail {
    name: string;
    url: string;
}

export interface IAttribute {
    id: number;
    Name: string;
    Value: string
}

export interface IProductVariant {
    id: number;
    Price: number;
    Kolor: string;
    Przeszklenie: string;
    Thumbnail: IGallery;
}

export interface IGallery {
    id: number;
    name: string;
    url: string;
}

    export interface IPost {
        id: number;
        title: string;
        gallery: IGallery[];
        thumbnail: IGallery;
        content: any;
        created_at : string
    }



export interface IProduct {
    id: number;
    Name: string;
    category: ICategory;
    Type: string;
    Price: number;
    salePrice: number;
    Gallery: IGallery[];
    Content: any;
    Posts: IPost[];
    Variant: IProductVariant[];
    Thumbnail: IThumbnail;
    color: string;

    // variants: ProductVariant[];
}

export interface IProducts {
    products: IProduct[];
}



const initialState: IProduct[] = [];


const  productsReducer = (state = initialState, action: IFetchProductsAction)=> {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return [
                ...action.products
            ];
        default:
            return state;
    }
};

// export const getProducts = state => state.products;
export default productsReducer;