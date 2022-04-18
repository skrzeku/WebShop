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


class HomePage extends React.Component{



    render(): React.ReactNode {
        return(<div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Slider/>
            HomePage
            <MostCategories/>
            <BestSellers/>
            {/*<HomeSale/>*/}
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


