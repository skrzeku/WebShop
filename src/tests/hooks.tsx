import React, {ReactElement, useCallback, useEffect, useReducer, useState} from 'react';
import {useSelector} from "react-redux";
import {State} from "./index";
import lol from '../test4';
import ReduxApp from "tests/redux";


interface IFetchProps {
    url: string;
}

const Counter = ()=> {
    const [counter, setCounter] = useState(0);

    const moreLove = (e:React.MouseEvent) => {
        setCounter(counter + 1);
    }

    return(
        <>
            <div>
                <ReduxApp/>
                <button onClick={moreLove}>Give me more love</button>
            </div>
        </>
    )
}

const initialState = {count: 0};

interface ICounterState {
    count: number
}



interface IAddAction {
    type: 'add'
}

interface IResetAction {
    type: 'reset'
}
type CounterAction = IAddAction | IResetAction;



function reducer(state:ICounterState, action:CounterAction): ICounterState {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'add':
            return {count: state.count + 1};
        default:
            return state
    }
}


const Reducer = ({count= 0} : ICounterState) => {
    const [state, dispatch] = useReducer(reducer, {count});


    return(
        <>
            <p>{state.count}</p>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
            <button onClick={()=> dispatch({type: 'add'})}>+</button>
        </>
    )


}


const Fetch = ({url} : IFetchProps) => {
    const getData = useCallback(async ()=> {
        const response = await fetch(url)
    }, []);

    useEffect(()=> {
        async function fetchData() {
            const data = await getData;
        }
    }, [getData()])
};



function Hooks(): ReactElement {

    const stan = useSelector((state: State)=> state.counter);




    return(<div>
        <p>Stan: {stan}</p>


        <Counter/>
        <Reducer count={0}/>
    </div>)
}


export default Hooks;