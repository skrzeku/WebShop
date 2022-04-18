import Styled from "styled-components";
import {colorPrimary, colorSecondary} from "./variables";
import {Overlay} from "./mixins";

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';



export const SwpierImg = Styled.img`
object-fit: cover;
width: 100%;
height: 100vh;
min-height: 700px;
`;

export const SwiperWrapper = Styled.div`
box-shadow: 0px 0px 0px 20px ${colorPrimary};
overflow: hidden;
`;

export const SwipeR = Styled(Swiper)`
position: relative;

.swiper-pagination {
position: absolute;
bottom: 20px;
left: 0;
z-index: 10;
width: 100%;
text-align: center;
}
.swiper-button-prev, .swiper-button-next {
position: absolute;
top: 50%;
font-size: 40px;
line-height: 50px;
color: white;
text-align: center;
transform: translateY(-50%);

width: 30px;
height: 50px;
z-index: 3;
left: 10px;
}
.swiper-button-prev {
 &:after {
    content: '\f104';
    font-family: 'Line Awesome Free';
    font-weight: 900;
    width: 100%;
    }
}
.swiper-button-next {
right: 15px;
left: unset;
    &:after {
    width: 100%;
    content: '\f105';
    font-family: 'Line Awesome Free';
    font-weight: 900;
    }
}
.swiper-pagination-bullet {
        background-color: white;
        display: inline-block;
        width: 30px;
        height: 10px;
        margin-right: 10px;
            &-active {
            background-color: ${colorSecondary};
            
            }
    }
.swiper-slide {
${Overlay('0,0,0', '0.4')};
    >div {
    transition: 1s all ease-in-out;
    }
    &-active {
    > div {
    transform: translateX(-50%) translateY(20%);
    }
    }
}
 
`;

export const SwiperContent = Styled.div`
position: absolute;
bottom: 30%;
text-align: center;
left: 50%;
max-width: 600px;
transform: translateX(-50%) translateY(50%);
color: white;
`;

export const SwiperSlides = Styled(SwiperSlide)`
    position: relative;
 
`;

export const SwiperTitle = Styled.h2`
font-size: 50px;
text-transform: uppercase;
margin-top: 0;
line-height: 1.1;
margin-bottom: 20px;
`;

export const SwiperBold = Styled.p`
font-size: 20px;
color: ${colorSecondary};
text-transform: uppercase;
margin-bottom: 0;
`;

export const SwiperSale = Styled(Swiper)`
position: relative;

`;