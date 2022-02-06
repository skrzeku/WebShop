import React from "react";
import Styled from 'styled-components';
import {colorPrimary} from "../../assets/styles/variables";
import {useSelector} from "react-redux";

const HeroWrapper = Styled.div`
padding-top: 80px;
min-height: 80px;
background-color: ${colorPrimary};
text-align: center;
`;

interface HeroProps {
    title: string;
}

const Hero:React.FC<HeroProps> = ({title})=> {


    return(<HeroWrapper>{title}</HeroWrapper>)
};


export default Hero;