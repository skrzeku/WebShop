import React from 'react';
import {Link} from 'react-router-dom';



const Navigation:React.FC = ()=> {
    return(<div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cart"><i className="las la-shopping-cart"></i>Cart</Link>
    </div>)
};



export default Navigation;