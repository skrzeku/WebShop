import React from 'react';
import Hero from "../../components/Hero";
import {useSelector} from "react-redux";
import {IProduct, IProducts} from "../../store/reducers/productsReducer";
import {State} from "store/rootReducer";

// import {Col3, Col4, Col50, Col9, Container, Row} from "../../assets/styles/global";
import Styled from 'styled-components';
import ProductFilter from "../../components/ProductFilter";
import {ICategory} from "store/reducers/CategoryReducer";
import ProductBlock from "../../components/ProductBlock";
import {Col, Container, Row} from "react-bootstrap";










const ArchiveProduct:React.FC = ()=> {

    const allProducts = useSelector<State, IProduct[]>(state => state.products);
    const allCategories = useSelector<State, ICategory[]>(state => state.categories);

    return(<div>
        <Hero title={'Nasza Oferta'}/>
        <Container className="py-5">
            <Row>
                <Col lg="4">
                    <ProductFilter/>
                </Col>

               <Col lg="8">
                   <Row>
                       {
                           allProducts.map((one)=> {
                               return(
                                   <Col md="4">
                                       <ProductBlock product={one}/>
                                   </Col>)
                           })
                       }
                   </Row>
               </Col>
            </Row>




        </Container>

    </div>)
}

export default ArchiveProduct;