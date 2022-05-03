import React from 'react';
import {connect} from "react-redux";
import {fetchProductsStartAsync} from "store/fetchProducts";
import {bindActionCreators, Dispatch} from "redux";
import {fetchProductsSuccess, IFetchProductsAction} from "../../store/actions/productsActions";
import Slider from "components/Slider";
import Partners from "components/Partners";
import BestSellers from "components/BestSellers";
import MostCategories from "components/MostCategories";
import {Container, Row} from "../../assets/styles/global";
import HomeSale from "../../components/HomeSale";
import HomePosts from "../../components/PostsSlider";
import SinglePost from "../SinglePost";


class HomePage extends React.Component{



    render(): React.ReactNode {
        return(<div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Slider/>
            HomePage
            <MostCategories/>
            <BestSellers/>
            <HomePosts/>
            {/*<HomeSale/>*/}
            {/*<SinglePost/>*/}
            <Partners/>
        </div>);
    }
}

// const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
//     fetchProducts: fetchProductsStartAsync
// }, dispatch);

export default connect(
    null,
    // mapDispatchToProps
)(HomePage)


