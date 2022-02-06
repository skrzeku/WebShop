import {fetchProductsSuccess} from "./actions/productsActions";
import axios from "axios";
import {Dispatch} from 'redux';
import {IProducts} from "./reducers/productsReducer";



export const  fetchProducts = () => {
    return (dispatch:Dispatch) => {
        // dispatch(fetchDataRequest());
        axios
            .get(
                "http://localhost:1337/api/produkts"
                // "http://localhost:1337/produkties"
            )
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                const {data} = response;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchProductsStartAsync = () => {
    return async (dispatch:Dispatch) => {
        // const response = await fetch("http://localhost:1337/api/produkts?populate=*");
        // const data = await response.json();
        // console.log(data);
        axios
            // .get("http://localhost:1337/api/produkts?populate=*")
            .get("http://localhost:1337/produkties")
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                console.log(response);
                    // console.log(response.data[0]);
            })
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
};


// ?