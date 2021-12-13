import {Dispatch} from "react";
import {Action} from "./counterReducer";


export const add = (value: number) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'add',
            payload: value
        })
    }
};


export const reset = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'reset'
        })
    }
};


