import React from 'react';
import {connect} from "react-redux";
import {fetchProductsStartAsync} from "../../store/fetchProducts";
import {bindActionCreators, Dispatch} from "redux";
import {fetchProductsSuccess, IFetchProductsAction} from "../../store/actions/productsActions";


class HomePage extends React.Component{

    constructor(props:any) {
        super(props)}

    componentDidMount(): void {
        // fetchProductsStartAsync();
    }

    render(): React.ReactNode {
        return(<div>HomePage</div>);
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    fetchProducts: fetchProductsStartAsync
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(HomePage)


