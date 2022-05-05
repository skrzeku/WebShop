import React, {ReactElement, useEffect} from 'react';
import 'App.css';
import HomePage from 'containers/HomePage'

import axios from 'axios';

import Fetch from './tests/fetch';
import List from './tests/fetch';
import Hooks from "./tests/hooks";
import ReduxApp from "./tests/redux";
import {store} from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';


import {fetchProducts, fetchProductsStartAsync} from "./store/fetchProducts";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {Routes, Route, useLocation} from "react-router-dom";
import ArchiveProduct from "containers/ArchiveProduct";
import Cart from "containers/Cart";
import ArchivePost from "./containers/Blog";
import Checkout from "containers/Checkout";
import Navigation from "components/Navigation";
import Blog from "containers/Blog";
import SingleProduct from "containers/SingleProduct";
import Footer from "containers/Footer";
import {fetchCategorySuccess, fetchPostsSuccess} from "store/actions/productsActions";
import SinglePost from "containers/SinglePost";
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

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(()=> {
    // mapDispatchToProps(dispatch);
     dispatch(fetchProductsStartAsync());
        });

    //
    useEffect(()=> {
        axios.get('http://localhost:1337/categories').then(response => {
            dispatch(fetchCategorySuccess(response.data));
        });

        axios.get('http://localhost:1337/posts').then(res => {
            dispatch(fetchPostsSuccess(res.data));
        }) ;
    }, []);

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
           <Route  path='product/:id' element={<SingleProduct/>}/>
           <Route  path='post/:id' element={<SinglePost/>}/>
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
        <Footer/>
    </div>
  );
}

export default App;
