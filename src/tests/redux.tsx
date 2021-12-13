import React from 'react';
import {bindActionCreators} from "redux";
import {useDispatch, useSelector} from "react-redux";
import * as actionsIndex from './actionsIndex';
import {State} from "./index";





const ReduxApp = ()=> {
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state.counter);
    const {add, reset} = bindActionCreators(actionsIndex, dispatch);


    return (
        <div>
            <p>{state}</p>
            <button onClick={()=> add(5)}>Add</button>
            <button onClick={()=> reset()}>Add</button>
        </div>
    )
}

export default ReduxApp;