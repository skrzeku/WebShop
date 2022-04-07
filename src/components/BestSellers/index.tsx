import React from "react";
import {Col50, Container, Row} from "../../assets/styles/global";
import {SectionTitle} from "../../assets/styles/typography";
import HomeSale from "../HomeSale";


const BestSellers:React.FC = ()=> {
    return(<div>
        <Container>
            <Row>
                <Col50>
                    <HomeSale/>
                </Col50>
                <Col50>
                    <SectionTitle><h2>Nasza Oferta</h2></SectionTitle>
                </Col50>
            </Row>

        </Container>
    </div>)
}   ;



export default BestSellers;