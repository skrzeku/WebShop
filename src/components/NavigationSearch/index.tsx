import {useSelector} from "react-redux";
import {IProduct, IProducts} from "store/reducers/productsReducer";
import {State} from "store/rootReducer";
import {ChangeEvent, MouseEventHandler, useEffect, useState} from "react";
import {FormControl, InputGroup} from "react-bootstrap";
import * as React from "react";
import NoImage from 'assets/images/noImage.png';
import Styled from 'styled-components';
import {colorSecondary} from "assets/styles/variables";
import {Price} from "assets/styles/product";
import {useLocation, useNavigate} from "react-router-dom";

const ProductsWrapper = Styled.div`
position: absolute;
bottom: 0;
left: 0;
z-index: 5;
transform: translateY(100%);

// max-width: 300px;
width: 100%;

`;

const SearchIcon = Styled(InputGroup.Text)`
background-color:${colorSecondary};
`;

const SearchWrapper = Styled.div`
position: relative;
width: 500px;

.form-control {
box-shadow: none !important;
}
`;

const FilteredProduct = Styled.div`
display: flex;
height: 80px;
align-items: center;
background: #fff;
border-bottom: solid 1px lightgray;
animation: ShowSearchResults 1s forwards;
transition: 0.3s all ease;
cursor: pointer;
    &:hover {
    background: #f7f7f7;
    }
`;

const FilteredProduct__name = Styled.p`
color: black;
font-size: 14px;
margin-bottom: 5px;
`;

const FilteredProduct__img = Styled.img`
height: 100%;
aspect-ratio: 1/1;
object-fit: contain;
`;

const NavigationSearch: React.FC = ()=> {

    const products = useSelector<State, IProduct[]>(state => state.products);
    const [inputValue, setInputValue] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();



    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) : void => {
            setInputValue(e.target.value);
    };
    const showFilteredProducts = ()=> {
        if (inputValue.length >= 3) {
            return products.filter((product)=> {
                console.log(product.Name);
                return product.Name.toLowerCase().includes(inputValue.toLowerCase());
            });
        }
    }

  useEffect(()=> {
      setInputValue('');
  }, [location])

    const NavigateToProduct = (id:number, e:MouseEvent)=> {
        e.preventDefault();
        navigate('/product/' + id);
        // setInputValue('');
    };
    console.log(!showFilteredProducts());


    return(<SearchWrapper>
        <form>
            <InputGroup>
                <FormControl
                    placeholder="Search for products"
                    onChange={onChangeInputHandler}
                    value={inputValue}

                />
                <SearchIcon><i className="las la-search"></i></SearchIcon>
            </InputGroup>
        </form>
        <ProductsWrapper>
            {
                showFilteredProducts()?.length == 0 && (<FilteredProduct className="justify-content-center"><FilteredProduct__name>No products</FilteredProduct__name></FilteredProduct>)
            }
            {showFilteredProducts()?.map((one)=> {
                return(<FilteredProduct onClick={event => NavigateToProduct(one.id, event)}>
                    <FilteredProduct__img src={one.Thumbnail?  'http://localhost:1337' + one.Thumbnail?.url : NoImage}/>
                    <div className="mx-4">
                        <FilteredProduct__name>{one.Name}</FilteredProduct__name>
                        {
                            one.salePrice ?  <Price><del>{one.Price} zł</del> <span>{one.salePrice} zł</span></Price> :
                                <Price><span>{one.Price} zł</span></Price>
                        }
                    </div>
                </FilteredProduct>)
            })}
        </ProductsWrapper>
    </SearchWrapper>)
}


export default NavigationSearch;