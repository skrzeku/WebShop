import NoImage from "assets/images/noImage.png";
import React from "react";
import Styled from "styled-components";
import {Link} from "react-router-dom";
import {colorPrimary} from "assets/styles/variables";
import {IProduct} from "store/reducers/productsReducer";
import {Price} from "assets/styles/product";

const ProductContainer = Styled.div`
position: relative;
text-align: center;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.18);
    transition: 0.3s all ease-in-out;


    &:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.18);
        img {
        transform: scale(1.1);
        }
    }
`;

const ProductImg = Styled.img`
width: 100%;
height: 200px;
object-fit: cover;
    transition: 0.3s all ease-in-out;
    overflow: hidden;

`;

const ProductTitle = Styled.h2`
color: ##333333;
margin-bottom: 10px;
font-size: 15px;
`;

const ProductCategory = Styled.p`
margin-top: 0;
font-size: 0.9em;
`;

const ProductLink = Styled(Link)`
background-color: ${colorPrimary};
color: white;
text-transform: upperCase;
font-weight: 500;
font-size: 15px;
// width: 100%;
padding: 10px;
display: block;;
text-decoration: none;
`;

const ProductPrice = Styled.p`
color: ${colorPrimary};
font-weight: bold;
font-size: 18px;
`;

const ProductBadge = Styled.span`
position: absolute;
left: 0;
top: 0;
padding: 5px 10px;
z-index: 3;
background-color: ${colorPrimary};
color: white;
`;
interface IProps {
    product: IProduct
}



const ProductBlock = ({product} :  IProps)  => {


return(<ProductContainer>
    {
        product?.Variant.length ? <ProductBadge>Warianty</ProductBadge> : null
    }
    <ProductImg src={product.Thumbnail? 'http://localhost:1337' + product.Thumbnail?.url : NoImage}/>
    <ProductTitle>{product.Name}</ProductTitle>
    <ProductCategory>{product.Category}</ProductCategory>
    <Price><del>{product.Price} zł</del> <span>{product.salePrice} zł</span></Price>
    <div>
        <ProductLink to={'/product/' + product.id}>Więcej</ProductLink>
        {/*<Button ><i className="las la-cart-plus"></i>Dodaj do koszyka</Button>*/}

    </div>
</ProductContainer>)
}


export default ProductBlock


