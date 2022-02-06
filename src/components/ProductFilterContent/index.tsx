import React from 'react';
import Styled from 'styled-components';
import {Row} from "../../assets/styles/global";
import {useSelector} from "react-redux";
import {IProduct} from "../../store/reducers/productsReducer";
import {State} from "../../store/rootReducer";
import {Button} from "../../ui-components/Button";

type filterContainerProps = {
    showContainer?: boolean
}


const FilterContainer = Styled.div<filterContainerProps>`
width: 100vw;
right: 0;
top:0;
height: 100vh;
z-index: 10;
display: ${props => props.showContainer? 'block' : 'none'};
position: fixed;
background-color: rgba(0,0,0, 0.4);

`;
const FilterInner = Styled.div<filterContainerProps>`
position: absolute;
right: 0;
transform: ${props => props.showContainer? 'translateX(0)' : 'translateX(100%)'};
width: 300px;
height: 100vh;
background-color: white;
z-index: 2;
top: 0;
`;

type FilterProps = {
    showFilters: boolean
    onClose?: any
}





const ProductFilterContent = ({showFilters, onClose} : FilterProps)=> {
    const AllProducts = useSelector<State, IProduct[]>(state => state.products);
    const cats = Array.from(new Set(AllProducts.map((one) => one.Category)));
    const ProductTypes = Array.from(new Set(AllProducts.map((one) => one.Type)));
    // const ProductTypes = ['Prosty', 'Warianty'];
    // const set = Array.from(new Set(cats));






    return(<FilterContainer showContainer={showFilters}>
            <FilterInner showContainer={showFilters}>
                <Row spaceBetween m0 flexCenter>
                    <h3>Wszystkie filtry</h3>
                    <i className="las la-times" onClick={()=>onClose()}></i>
                </Row>
                <form>
                    <h3>Kategoria</h3>
                    {
                        cats.map((category)=> {
                            return(
                                <label><input type="checkbox" value={category}/>{category}</label>
                            )
                        })
                    }
                    <h3>Typ Produktu</h3>
                    {
                        ProductTypes.map((type)=> {
                            return(
                                <label><input type="checkbox" value={type}/>{type}</label>
                            )
                        })
                    }
                    <h3>Cena</h3>
                    <label>Od <input type="number"/></label>
                    <label>Do <input type="number"/></label>
                    <Button>Zatwierdz <input type='submit'/></Button>

                </form>


            </FilterInner>
        </FilterContainer>)
};



export default ProductFilterContent;