import React from "react";
import Styled from 'styled-components';
import {colorPrimary} from "../../assets/styles/variables";
import {useSelector} from "react-redux";
import heroImg from 'assets/images/hero.jpg';
import {Overlay} from "assets/styles/mixins";

const HeroWrapper = Styled.div`
padding-top: 100px;
height: 400px;
text-align: center;
position: relative;
background-image: url(${heroImg});
background-size: cover;
background-position: 50% 75%;
${Overlay('0,0,0', '0.4')};
border-bottom: solid 7px ${colorPrimary};


`;

const HeroTitle = Styled.h2`
font-size: 50px;
font-weight: bold;
text-transform: uppercase;
color: white;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.66);
position: absolute;
left: 50%;
top: 60%;
transform: translateX(-50%);
animation: sliderContentFade 1s forwards;
`;



interface HeroProps {
    title: string;
}

const Hero:React.FC<HeroProps> = ({title})=> {


    return(<HeroWrapper>
        <HeroTitle>
            {title}
        </HeroTitle>

    </HeroWrapper>)
};


export default Hero;