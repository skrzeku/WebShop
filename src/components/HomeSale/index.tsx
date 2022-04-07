import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../../store/rootReducer";
import {IProduct} from "../../store/reducers/productsReducer";
import  {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import {SwipeR, SwiperBold, SwiperContent, SwiperTitle, SwpierImg} from "../../assets/styles/swiper";
import {Button} from "../../ui-components/Button";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import NoImage from "../../assets/images/noImage.png";




const HomeSale:React.FC = ()=> {

    const Products = useSelector<State, IProduct[]>(state => state.products);
    const saleProducts = Products.filter((one)=> one.salePrice);



    return(<div>
        <h3>Produkty Przecenione</h3>
        <SwipeR
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            speed={1000}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {saleProducts?.map((one: any)=> {
                console.log(one.Thumbnail);
                // const {attributes} = one;
                // console.log(attributes);
                return (
                    <SwiperSlide>
                        <SwpierImg src={one.Thumbnail? 'http://localhost:1337' + one.Thumbnail?.url : NoImage}/>
                        <SwiperContent>

                        </SwiperContent>
                    </SwiperSlide>
                )
            })}
        </SwipeR>

    </div>)
}

export default HomeSale;