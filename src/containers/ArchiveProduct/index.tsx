import React from 'react';
import Hero from "../../components/Hero";
import {useSelector} from "react-redux";
import {IProduct, IProducts} from "../../store/reducers/productsReducer";
import {State} from "../../store/rootReducer";
import NoImage from 'assets/images/noImage.png';
import {Col3, Col4, Col50, Col9, Container, Row} from "../../assets/styles/global";
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colorPrimary} from "../../assets/styles/variables";
import ProductsSidebar from "../../components/ProductFilterBar";
import ProductFilterBar from "../../components/ProductFilterBar";
import ProductFilterContent from "../../components/ProductFilterContent";
import ProductFilter from "../../components/ProductFilter";
import {ICategory} from "../../store/reducers/CategoryReducer";


const Rows = Styled.div`
background: red;
margin: 0 -15px;
display: flex;
flex-flow: row wrap;
height: 20px;
`;

const Col45 = Styled.div`
background: white;
padding: 15px;
width: 100%;
// flex-basis: 50%;
// height: 20px;
flex: 1;
`;

const ProductBlock = Styled.div`
position: relative;
text-align: center;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.18);
    transition: 0.3s all ease-in-out;


    &:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.18);
    }
`;

const ProductImg = Styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`;

const ProductTitle = Styled.h2`
margin-bottom: 10px;
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
background-color: ${colorPrimary};
color: white;
`;







const ArchiveProduct:React.FC = ()=> {

    const allProducts = useSelector<State, IProduct[]>(state => state.products);
    const allCategories = useSelector<State, ICategory[]>(state => state.categories);

    return(<div>
        <Hero title={'Nasza Oferta'}></Hero>
        <Container>
                <ProductFilter/>


                    <Row>
                        {
                            allProducts.map((one)=> {
                                return(
                                    <Col3>
                                        <ProductBlock>
                                            {
                                                one.Variant.length ? <ProductBadge>Warianty</ProductBadge> : null
                                            }
                                            <ProductImg src={one.Thumbnail? 'http://localhost:1337' + one.Thumbnail?.url : NoImage}/>
                                            <ProductTitle>{one.Name}</ProductTitle>
                                            <ProductCategory>{one.Category}</ProductCategory>
                                            <ProductPrice>{one.Variant.length? 'Od:' : ''}{one.Price} zł</ProductPrice>
                                            <div>
                                                <ProductLink to={'/product/' + one.id}>Więcej</ProductLink>
                                            </div>
                                        </ProductBlock>
                                    </Col3>)
                            })
                        }
            </Row>


        </Container>

    </div>)
}

export default ArchiveProduct;