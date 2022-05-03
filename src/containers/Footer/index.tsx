import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Styled from 'styled-components';
import {colorPrimary, colorSecondary} from "assets/styles/variables";
import Play from 'assets/images/play.png';
import Stores from 'assets/images/appstore.png';
import p24 from 'assets/images/p24.png';



const FooterWrapper = Styled.footer`
background-color: ${colorPrimary};
color: white;
`;
const FooterTop = Styled.div`
padding: 30px 0;
border-bottom: solid 1px rgba(225, 225, 225, 0.1);
`;
const FooterCopyright = Styled.div`
padding: 10px;
text-align: center;
font-size: 14px;
`;
const FooterTitle = Styled.h5`
   margin-bottom: 10px;
    font-weight: 600;
`;

const FooterBody = Styled.div`
padding: 50px 0;
border-bottom: solid 1px rgba(225, 225, 225, 0.1);
`;

const FooterList = Styled.ul`
list-style-type: none;
padding-left: 0;
    a {
    color: rgba(225,225,225,0.8);
    text-decoration: none;
   
    }

`;


const FooterCol = Styled(Col)`
display: flex;
flex-flow: no-wrap;
align-items: center;
padding: 0 30px;
position: relative;
    &:after {
    position: absolute;
    top: 50%;
    right: 0;
    height: 80px;
    width: 1px;
    background-color: rgba(225, 225, 225, 0.1);
    transform: translateY(-50%);
    content: '';
    }
        &:last-child {
        &:after {
        content: unset;
        }
        }
i {
color: ${colorSecondary};
width: 40%;
font-size: 50px;
}
  
    p {
    color: rgba(225, 225, 225, 0.8);
    font-size: 12px;
    margin-bottom: 0;
    line-height: 1.2;
    }
`;






const Footer:React.FC = ()=> {
    console.log(Play);
    return(<FooterWrapper>
        <FooterTop>
            <Container>
                <Row>
                    <FooterCol md="4" lg="3">
                        <i className="las la-shipping-fast"></i>
                        <div>
                            <FooterTitle>anim id est laborum.</FooterTitle>
                            <p>Excepteur sint occaecat cupidatat non proiden</p>
                        </div>
                    </FooterCol>
                    <FooterCol md="4" lg="3">
                        <i className="las la-shipping-fast"></i>
                        <div>
                            <FooterTitle>anim id est laborum.</FooterTitle>
                            <p>Excepteur sint occaecat cupidatat non proiden</p>
                        </div>
                    </FooterCol>
                    <FooterCol md="4" lg="3">
                        <i className="las la-money-check-alt"></i>
                        <div>
                            <FooterTitle>anim id est laborum.</FooterTitle>
                            <p>Excepteur sint occaecat cupidatat non proiden</p>
                        </div>
                    </FooterCol>
                    <FooterCol md="4" lg="3">
                        <i className="lab la-alipay"></i>
                        <div>
                            <FooterTitle>culpa qui officia</FooterTitle>
                            <p>Excepteur sint occaecat cupidatat non proiden</p>
                        </div>
                    </FooterCol>
                </Row>
            </Container>
        </FooterTop>
        <FooterBody>
            <Container>
                <Row>
                    <Col md="4">
                        <FooterTitle>Our Stories</FooterTitle>
                        <FooterList>
                            <li><a href="#">Madrid</a></li>
                            <li><a href="#">Barcelona</a></li>
                            <li><a href="#">Tokyo</a></li>
                            <li><a href="#">Amsterdam</a></li>
                            <li><a href="#">Warsaw</a></li>
                        </FooterList>
                    </Col>
                    <Col md="4">
                        <FooterTitle>Lorem ipsum</FooterTitle>
                        <FooterList>
                            <li><a href="#">Madrid</a></li>
                            <li><a href="#">Barcelona</a></li>
                            <li><a href="#">Tokyo</a></li>
                            <li><a href="#">Amsterdam</a></li>
                            <li><a href="#">Warsaw</a></li>
                        </FooterList>
                    </Col>
                    <Col md="4">
                        <FooterTitle>Available on</FooterTitle>
                        <Row>

                            <Col><img src={Play}/></Col>
                            <Col><img src={Stores}/></Col>
                        </Row>
                    </Col>
                    <Col xs="8">
                        <img src={p24}/>
                    </Col>
                </Row>
            </Container>
        </FooterBody>
        <FooterCopyright>
              Lorem ipsum © All right reserved
        </FooterCopyright>
    </FooterWrapper>)
};

export default Footer;