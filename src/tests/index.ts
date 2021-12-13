import React from 'react';
import {combineReducers} from "redux";

import counterReducer from './counterReducer';





const reducers =combineReducers({
    counter: counterReducer
});


export type State = ReturnType<typeof reducers>;



export default reducers;

