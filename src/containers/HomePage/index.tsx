import React from 'react';
import {connect} from "react-redux";
import {fetchProductsStartAsync} from "store/fetchProducts";
import {bindActionCreators, Dispatch} from "redux";
import {fetchProductsSuccess, IFetchProductsAction} from "../../store/actions/productsActions";
import Slider from "components/Slider";
import Partners from "components/Partners";
import BestSellers from "components/BestSellers";
import MostCategories from "components/MostCategories";


class HomePage extends React.Component{

    constructor(props:any) {
        super(props)}

    componentDidMount(): void {
        // fetchProductsStartAsync();
    }

    render(): React.ReactNode {
        return(<div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Slider/>HomePage
            <MostCategories/>
            <BestSellers/>
            <Partners/>
        </div>);
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    fetchProducts: fetchProductsStartAsync
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(HomePage)


