import React, {useEffect, useState} from "react";
import Styled from 'styled-components';
import partners from 'assets/images/partners.jpg';
import {SectionTitle} from "assets/styles/typography";
import {Container, Row} from "react-bootstrap";
import {colorPrimary} from "assets/styles/variables";
import axios from "axios";
import {IGallery} from "store/reducers/productsReducer";
import { SwiperSlide, Swiper } from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
const PartnersContainer = Styled.div`
background-image: url(${partners} );
position: relative;
background-color: rgba(0,0,0,0.7);
background-blend-mode: color;
padding: 120px 0;
background-position: center;
background-attachment: fixed;
background-size: cover;
color: white;
margin: 80px 0;
text-align: center;

h2 {
color: white;
}
`;
const PartnerLogo = Styled.img`
height: 85px;
max-width: 100%;
object-fit: contain;
`;

interface IPartner {
    id: number
    name: string
    logo: IGallery
}

const Partners:React.FC = ()=> {
    const [partners, setPartners] = useState<IPartner[]>([]);


    useEffect(()=> {
        axios.get('http://localhost:1337/partners').then(response => {
            setPartners(response.data);
            // console.log(response);
        });
        }, []);



    return(<PartnersContainer>
        <Container>
            <SectionTitle><h2>Nasi partnerzy</h2></SectionTitle>
            <Row>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    loop={true}

                    autoplay={{ delay: 3000 }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        partners?.map((partner)=> {
                            return(<SwiperSlide>
                                <PartnerLogo src={'http://localhost:1337' + partner.logo.url}/>
                                {/*<p>{partner.name}</p>*/}
                            </SwiperSlide>)
                        })
                    }

                </Swiper>

            </Row>

        </Container>


    </PartnersContainer>)
};


export default Partners;