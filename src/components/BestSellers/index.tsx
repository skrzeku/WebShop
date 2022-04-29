import React from "react";
import {Col50, Container, Row} from "../../assets/styles/global";
import {SectionTitle} from "../../assets/styles/typography";
import HomeSale from "../HomeSale";
import {useSelector} from "react-redux";
import {State} from "../../store/rootReducer";
import ProductBlock from "../ProductBlock";
import {IProduct, IProducts} from "../../store/reducers/productsReducer";


const BestSellers:React.FC = ()=> {
    const lastProducts = useSelector<State, IProduct[]>(state => state.products);
    
    
    return(<div>
        <Container>
            <Row>
                <Col50>
                    <HomeSale/>
                </Col50>
                <Col50>
                    <SectionTitle><h2>Nasza Oferta</h2></SectionTitle>
                    <Row>
                        {
                            lastProducts.map((product)=> {
                                return(<Col50><ProductBlock product={product}/></Col50>)
                            })
                        }
                    </Row>

                </Col50>
            </Row>

        </Container>
    </div>)
}   ;



export default BestSellers;