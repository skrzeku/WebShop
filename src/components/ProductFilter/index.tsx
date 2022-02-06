import React, {useState} from "react";
import ProductFilterBar from "../ProductFilterBar";
import ProductFilterContent from "../ProductFilterContent";
import {Container} from "../../assets/styles/global";



const ProductFilter:React.FC = ()=> {

    const [formVisibility, setFormVisible] = useState<boolean>(false);

    const closeFilters = ()=> {
        setFormVisible(false)
    };
    const showFilters = ()=> {
        setFormVisible(true);
        console.log('dziala');
    }
    return(<>
        <ProductFilterBar onShown={()=>showFilters()}/>
        <ProductFilterContent showFilters={formVisibility} onClose={()=> closeFilters()}/>
    </>)
};


export default ProductFilter;