import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {State} from "../../store/rootReducer";
import {IProduct} from "../../store/reducers/productsReducer";
import  {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import {SwipeR, SwiperBold, SwiperContent, SwiperSale, SwiperTitle, SwpierImg} from "../../assets/styles/swiper";
import {Button} from "../../ui-components/Button";
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import NoImage from "../../assets/images/noImage.png";
import Styled from 'styled-components';
import {colorSecondary} from "../../assets/styles/variables";
import {SectionTitle} from "../../assets/styles/typography";
import {Price} from "../../assets/styles/product";

const HomeSaleWarpper = Styled.div`
border: solid 1px ${colorSecondary};
padding: 30px;
`;

const SwiperSaleContent = Styled.div`
text-align: center;
`;




const HomeSale:React.FC = ()=> {

    const Products = useSelector<State, IProduct[]>(state => state.products);
    const saleProducts = Products.filter((one)=> one.salePrice);
    const navigate = useNavigate();

    console.log(saleProducts);

    const navigateToProduct = ()=> {
        // navigate('/products');
    };



    return(<HomeSaleWarpper>
        <SectionTitle><h2>Produkty Przecenione</h2></SectionTitle>
        <SwiperSale
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            autoplay
            pagination={{ clickable: true }}
            speed={1000}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {saleProducts?.map((one: IProduct)=> {
                console.log(one.Thumbnail);

                return (
                    <SwiperSlide>
                        <SwpierImg src={one.Thumbnail? 'http://localhost:1337' + one.Thumbnail?.url : NoImage}/>
                        <SwiperSaleContent>
                            <h2>{one.Name}</h2>
                            <Price><del>{one.Price} zł</del> <span>{one.salePrice} zł</span></Price>
                            <Button ><i className="las la-cart-plus"></i>Dodaj do koszyka</Button>

                        </SwiperSaleContent>
                    </SwiperSlide>
                )
            })}
        </SwiperSale>

    </HomeSaleWarpper>)
}

export default HomeSale;