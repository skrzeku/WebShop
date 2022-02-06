import React, {Dispatch, MouseEventHandler, ReactElement, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {useSelector} from "react-redux";
import {IProduct, IProducts} from "../../store/reducers/productsReducer";
import {State} from "../../store/rootReducer";
import {Row} from "../../assets/styles/global";


type FilterProps = {
    onShown: () => void;
}
type SortValues = string | undefined;

const FilterOptions = ['Cena Rosnąco', 'Cena Malejąco', 'Od Najnowszych', 'Od Najstarszych'];




const ProductFilterBar = ({onShown}: FilterProps)=> {
    // const { register, handleSubmit } = useForm<FormValues>();

    const [sortValue, setSortValue] = useState<string>('');
    const FilteredProducts = useSelector<State, IProduct[]>(state => state.products);


    console.log(sortValue);



    return(<Row spaceBetween m0>
        <div>
            Liczba produktow: {FilteredProducts?.length}
        </div>
        <div onClick={(e)=> onShown()}>
          Fltrowanie wynikow
        </div>
       <select
           onChange={event => setSortValue(event.target.value)}
           value={sortValue}
       >
           {
               FilterOptions.map((option)=> {
                   return(
                       <option>{option}</option>
                   )
               })
           }
       </select>
        </Row>)
};



export default ProductFilterBar;