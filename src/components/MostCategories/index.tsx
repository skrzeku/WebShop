import React from "react";
import {Container, Row} from "assets/styles/global";
import {SectionTitle} from "assets/styles/typography";
import {useSelector} from "react-redux";
import {State} from "store/rootReducer";
import {ICategory} from "store/reducers/CategoryReducer";
import {IProduct} from "../../store/reducers/productsReducer";
import NoImage from "assets/images/noImage.png";
import Styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import {colorPrimary, colorSecondary} from "assets/styles/variables";

const MostCategoriesSection = Styled.div`
padding: 70px 0;
`;

const CategoryItem = Styled.div`
width: 20%;
display: inline-block;
text-align: center;
cursor: pointer;
    &:hover {
    h3 {
    color: ${colorSecondary};
    }
    img {
    transform: scale3d(1.1,1.1,1);
    }
    }
`;

const CategoryItem__image = Styled.img`
max-width: 100%;
height: 150px;
object-fit: contain;
margin-bottom: 0px;
transition: all 0.5s cubic-bezier(0,0,.44,1.18);
`;

const CategoryItem__title = Styled.h3`
margin-bottom: 10px;
font-size: 20px;
text-transform: upperCase;
transition: all 0.5s cubic-bezier(0,0,.44,1.18);
`;

const CategoryItem__text = Styled.p`
margin-bottom: 0;
font-size: 17px;
color: #777777;
margin: 0;
`;

const MostCategories:React.FC = ()=> {

    const navigate = useNavigate();
    const allCategories = useSelector<State, ICategory[]>(state => state.categories);
    const sortedCategories = allCategories.sort((a, b)=> b.products.length  - a.products.length);

    const navigateToCategory = ()=> {
        navigate('/products');
    };



    return(<MostCategoriesSection>
        <Container>
            <SectionTitle><h2>Kategorie Produktów</h2></SectionTitle>
            <Row m0>
                {
                    sortedCategories.map((one)=> {
                        return(<CategoryItem onClick={navigateToCategory}>
                            <CategoryItem__image src={one.thumbnail?  'http://localhost:1337' + one.thumbnail?.url : NoImage} />
                            <CategoryItem__title>{one.Name}</CategoryItem__title>
                            <CategoryItem__text>{one.products.length | 0} Produktów</CategoryItem__text>
                        </CategoryItem>)
                    })
                }
            </Row>



        </Container>
    </MostCategoriesSection>)
}


export default MostCategories;