import React, {useEffect, useState} from 'react';
// Import Swiper React components

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import '../../../node_modules/swiper/swiper.min.css';
import axios from "axios";

import {Button} from "../../ui-components/Button";
import {SwipeR, SwiperBold, SwiperContent, SwiperTitle, SwiperWrapper, SwpierImg} from "../../assets/styles/swiper";











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
                    <SwiperWrapper>
                    <SwipeR
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
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
                                    <SwiperContent>
                                        <SwiperBold>Lorem ipsum sit amet</SwiperBold>
                                        <SwiperTitle>Lorem ipsum dolor sit amet,</SwiperTitle>

                                        <Button>Nasza oferta</Button>
                                    </SwiperContent>
                                </SwiperSlide>
                            )
                        })}
                    </SwipeR>
                    </SwiperWrapper>



       </>)
};



export default Slider;