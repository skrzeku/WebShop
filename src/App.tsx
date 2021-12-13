import React, {ReactElement, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage'
import Test from './test';
import Test2 from './test2';
import Test4 from './test4'
import axios from 'axios';

import Fetch from './tests/fetch';
import List from './tests/fetch';
import Hooks from "./tests/hooks";
import ReduxApp from "./tests/redux";
import {store} from "./store/store";

import {fetchProducts, fetchProductsStartAsync} from "./store/fetchProducts";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {Routes, Route} from "react-router-dom";
import ArchiveProduct from "./containers/ArchiveProduct";
import Cart from "./containers/Cart";
import ArchivePost from "./containers/Blog";
import Checkout from "./containers/Checkout";
import Navigation from "./components/Navigation";
import Blog from "./containers/Blog";
type Status = 'loading' | 'failed' | 'finished';



interface IUserProps {
  name: string;
  email: string;
  roles?: string[]
}
interface IListItem {
    name: string,
    age: number
}

interface IFetchState<T> {
    status: Status,
    data: T[]
}

type FetchState = IFetchState<IListItem>;
interface IListProps {
    items: FetchState['data'],
    renderItem: (item: FetchState['data'][0]) => FetchState['data'][0];
}

interface IFetchProps {
    url: string,
    children: (state:FetchState) => ReactElement;
}



const USer = ({name, email, roles = []}: IUserProps) => {
  return(<div>{name} {email}</div>)
}
interface IListProps {
    items: FetchState['data'],
    renderItem: (item: FetchState['data'][0]) => FetchState['data'][0];
}

function App() {
    const dispatch = useDispatch();
    // const mapDispatchToProps = (dispatch: Dispatch) => ({
    //     fetchProductsStartAsync: fetchProductsStartAsync
    // });

    useEffect(()=> {
    // mapDispatchToProps(dispatch);
     dispatch(fetchProductsStartAsync());
        });

    //
    // useEffect(()=> {
    //     axios.get('http://localhost:1337/produkties').then(response => {
    //         console.log(response.data);
    //     });
    // }, []);

    const List = ({items, renderItem}: IListProps) => (
        <ul>
            {items.map((item)=>{
                console.log(items);
            }

                // <span>siema</span>
                // <li key={item.name}>{item.name}</li>
            )}
        </ul>
    );
  return (
    <div className="App">
      <header className="App-header">
          <Navigation></Navigation>
        {/*<USer name={'siema'} email={'lol'}/>*/}
      </header>
        <Routes>
           <Route  path='/' element={<HomePage/>}/>
           <Route  path='products' element={<ArchiveProduct/>}/>
           <Route  path='blog' element={<Blog/>}/>
           <Route  path='cart' element={<Cart/>}/>
           <Route  path='checkout' element={<Checkout/>}/>
            <Route path="*" element={<HomePage />} />
        </Routes>

        <Fetch url={'siema'}>
            {({data, status}) => {
                return (<>

                        {status == 'loading' &&  <p>Loading</p>}
                        {status === 'finished' && <List items={data} renderItem={(item)=> item}/> }
                    </>
                    )
            }}
        </Fetch>
      {/*<Test4/>*/}
      {/*  <Test2/>*/}
      {/*  <Hooks/>*/}
      {/*  <ReduxApp/>*/}


        {/*<HomePage/>*/}
    </div>
  );
}

export default App;
