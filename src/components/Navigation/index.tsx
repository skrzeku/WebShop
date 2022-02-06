import React from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';
import {colorPrimary} from "../../assets/styles/variables";


const Links = Styled(Link)`
color: black;
text-decoration: none;
font-size: 20px;
text-transform: uppercase;
padding: 10px;
display: inline-block;
`;

const Header = Styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
background-color: white;
z-index: 10;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;


const Navigation:React.FC = ()=> {
    return(<Header>
        <Links to="/">Home</Links>
        <nav>

        <Links to="/products">Products</Links>
        <Links to="/blog">Blog</Links>
    </nav>
        <div><Links to="/cart"><i className="las la-shopping-cart"></i>Cart</Links></div>
    </Header>)
};



export default Navigation;