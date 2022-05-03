import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Styled from 'styled-components';
import {colorPrimary, colorSecondary} from "assets/styles/variables";
import {Container, Row} from "assets/styles/global";
// @ts-ignore
import logo from 'assets/images/logo.png';
import NavigationSearch from "components/NavigationSearch";



const LocalWhite = 'rgba(255,255,255,.8)';
const BodrerColor = 'rgba(58, 77, 105, 1)';
const Links = Styled(NavLink)`
text-decoration: none;
font-size: 16px;
color: white;
text-transform: uppercase;
padding: 10px;
display: inline-block;
    &:hover {
    color: ${colorSecondary};
    }
    i {
    margin-right: 5px;
    }
        &.active {
          color: ${colorSecondary};
          font-weight: 500;
        }
`;

const Header = Styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
background-color: ${colorPrimary};
z-index: 10;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Header__top = Styled.div`


border-bottom: solid 1px ${BodrerColor};
// >div {
// border-left: solid 1px ${BodrerColor};
// border-right: solid 1px ${BodrerColor};
// font-size: 13px;

// }
    p, a {
    display: inline-block;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    line-height: 40px;
    margin: 0;
    font-size: 13px;
    text-transform: uppercase;
    }
      i {
    font-size: 20px;
    color: ${colorSecondary};
    }
`;




const Bordered = Styled.p`
border-left: solid 1px ${BodrerColor};
border-right: solid 1px ${BodrerColor};
padding: 0 15px;
i {
margin-right: 10px;}
`;

const HeaderMail = Styled.a`
padding: 0 15px;
display: inline-block;
i {
margin-right: 10px;}
`;

const HeaderSocial = Styled.div`
padding: 0 15px;
border-left: solid 1px ${BodrerColor};
border-right: solid 1px ${BodrerColor};

a {
padding: 0 10px;
display: inline-block;
}
`;

const HeaderBottom = Styled.div`
padding: 15px 0;
color: white;
`;





const Navigation:React.FC = ()=> {
    return(<Header>
        <Header__top>
            <Container>
                <Row spaceBetween>
                    <div>
                        <Bordered> <i className="las la-globe-europe"></i>Gdańsk, Poland</Bordered>
                        <HeaderMail href="mailto:email@example.com"><i className="las la-envelope"></i>email@example.com</HeaderMail>
                    </div>
                    <HeaderSocial>
                        <a><i className="lab la-twitter"></i></a>
                        <a><i className="lab la-facebook-f"></i></a>
                        <a><i className="lab la-instagram"></i></a>
                        <a><i className="lab la-youtube"></i></a>
                    </HeaderSocial>
                </Row>
            </Container>





        </Header__top>
        <HeaderBottom>
            <Container>
                <Row spaceBetween flexCenter>
                   <Link to="/"><img src={logo} alt="logo"/></Link>
                    <NavigationSearch/>
                    <nav>
                        <Links to="/" >Home</Links>

                        <Links to="/products">Products</Links>
                        <Links to="/blog">Blog</Links>
                        <Links to="/cart"><i className="las la-shopping-cart"></i>Cart</Links>
                    </nav>

                </Row>
            </Container>
        </HeaderBottom>



    </Header>)
};



export default Navigation;