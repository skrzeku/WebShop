import {fetchProductsSuccess} from "./actions/productsActions";
import axios from "axios";
import {Dispatch} from 'redux';



export const  fetchProducts = () => {
    return (dispatch:Dispatch) => {
        // dispatch(fetchDataRequest());
        axios
            .get(
                "http://localhost:1337/produkties"
            )
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchProductsStartAsync = () => {
    return (dispatch:Dispatch) => {
        axios
            .get("http://localhost:1337/produkties")
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                console.log(response.data);
                    // console.log(response.data[0]);
            })
            // .catch(error => dispatch(fetchProductsFailure(error)));
    };
};


// ?