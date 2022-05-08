import React, {useState} from "react";
import ProductFilterBar from "../ProductFilterBar";
import ProductFilterContent from "../ProductFilterContent";

import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {State} from "store/rootReducer";
import {ICategory} from "store/reducers/CategoryReducer";
import {IProduct} from "store/reducers/productsReducer";



const ProductFilter:React.FC = ()=> {

    const [formVisibility, setFormVisible] = useState<boolean>(false);
    const categories = useSelector<State, ICategory[]>(state => state.categories);
    const products = useSelector<State, IProduct[]>(state => state.products);
    let arr:string[] = [];
    const allColors = products.map((product)=> {

        arr.push(product.color.toLowerCase());
            product.Variant.map((variant)=> {
                arr.push(variant.Kolor.toLowerCase())
            });

    });
    const filteredColors = [...new Set(arr)];
    console.log(filteredColors);

    const closeFilters = ()=> {
        setFormVisible(false)
    };
    const showFilters = ()=> {
        setFormVisible(true);
        console.log('dziala');
    };
    return(<>

        {/*<ProductFilterBar onShown={()=>showFilters()}/>*/}
        <Form>
            <h2>Filtruj produkty</h2>
            <h3>Cena</h3>
            <Form.Range></Form.Range>
            <h3>Kolor</h3>
            <ul>
                {
                    filteredColors.map((color)=> {
                        return(
                            <li><a>
                                {color}
                            </a></li>
                        )
                    })
                }
            </ul>
            <h3>Kategoria</h3>
            <ul>
                {
                  categories.map((category)=> {
                     return(
                         <li><a>
                             {category.Name}
                         </a></li>
                     )
                  })
                }
            </ul>
            <h3>Typ</h3>
            <ul>
                <li>Prosty</li>
                <li>Warianty</li>
            </ul>

            <h3>Najtańsze produkty</h3>



        </Form>
        <ProductFilterContent showFilters={formVisibility} onClose={()=> closeFilters()}/>
    </>)
};


export default ProductFilter;