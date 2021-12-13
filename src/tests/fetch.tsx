import React, {ReactElement, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

type Status = 'loading' | 'failed' | 'finished';


interface IListItem {
    name: string,
    age: number
}

interface IFetchState<T> {
    status: Status,
    data: T[]
}

type FetchState = IFetchState<IListItem>;

interface IFetchProps {
    url: string,
    children: (state:FetchState) => ReactElement;
}



const Fetch = ({url, children}:IFetchProps)=> {


    const [state, setState] = useState<FetchState>({
       status: 'loading',
       data: [{name: 'Adam', age: 30}]
    });

    useEffect(()=> {
       setState({
           ...state,
           data: [],
           status: 'finished'
       })
    }, []);
    return children(state);
}

interface IListProps {
    items: FetchState['data'],
    renderItem: (item: FetchState['data'][0]) => FetchState['data'][0];
}




export default Fetch;

