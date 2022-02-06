import React, {useEffect, useState} from 'react';
// Import Swiper React components

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import axios from "axios";
import Styled from 'styled-components';
import {Col50, Container, Row} from "../../assets/styles/global";
import {colorPrimary} from "../../assets/styles/variables";
import {Button} from "../../ui-components/Button";


const SwpierImg = Styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;

const SwiperWrapper = Styled.div`
box-shadow: 0px 0px 0px 20px ${colorPrimary};
transform: rotate(45deg);
border-radius: 20px;
width: 60%;
overflow: hidden;
aspect-ratio: 1/1;
margin: 150px auto 0;
`;

const SwipeR = Styled(Swiper)`
width: 141%;
position: relative;
left: 50%;
top: 50%;
transform: translate(-50%, -50%) rotate(-45deg);
transform-origin: 50% 50%;
height: 141%;
`;






const Slider:React.FC = ()=> {

    const [gallery, setGallery] = useState([]);

    useEffect(()=> {
        axios
            .get(
                "http://localhost:1337/slider"
            )
            .then(response => {
                console.log(response);
                setGallery(response.data.gallery);
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return(<>
        <Container>
            <Row flexCenter>
                <Col50>
                    <SwiperWrapper>
                    <SwipeR
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        speed={1000}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {gallery?.map((one: any)=> {
                            console.log(one.url);
                            const {attributes} = one;
                            console.log(attributes);
                            return (
                                <SwiperSlide>
                                    <SwpierImg src={'http://localhost:1337' + one?.url}/>
                                </SwiperSlide>
                            )
                        })}
                    </SwipeR>
                    </SwiperWrapper>
                </Col50>
                <Col50>
                    <div>
                        <h2>Nasz sklep</h2>
                        <p>Lorem ipsum sit amet</p>
                        <Button>Nasza oferta</Button>
                    </div>
                </Col50>
            </Row>
        </Container>
       </>)
};



export default Slider;