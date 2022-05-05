import React, {useEffect, useState} from 'react';
import Hero from "../../components/Hero";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IProduct, IProductVariant} from "../../store/reducers/productsReducer";
import {State} from "../../store/rootReducer";
import {Col50, Container, Row} from "../../assets/styles/global";
import index from "../HomePage";
import {Button} from "../../ui-components/Button";
import Quantity from "../../components/Quantity";
import Pagination from "../../components/Pagination";


const SingleProduct:React.FC = (props)=> {
    let { id } = useParams();

    const Product = useSelector<State, IProduct | undefined>(state => state.products.find((item) => item.id == Number(id)));

    const [variant, setVariant] = useState<IProductVariant>();
    const [quantity, setQuantity] = useState(1);

    console.log(useLocation());

    console.log(Product);



    useEffect(()=> {
        if (Product) {
            console.log('Wykonano');
            setVariant(Product?.Variant[0]);
        }

    },[Product]);

    const  integer_to_roman =(num:number)=> {
        if (typeof num !== 'number')
            return false;

        var digits:any = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman_num = "",
            i = 3;
        while (i--)
            roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
        return Array(+digits.join("") + 1).join("M") + roman_num;
    };

    const incrementQuantity = ()=> {
      setQuantity(quantity + 1);
      console.log('siema');
    };
    const decrecementQuantity = ()=> {
        setQuantity(quantity - 1);
    };


    const VariantSelectMarkup = (
        <select onChange={event => setVariant(Product?.Variant[+event.target.value])}>
            {
                Product?.Variant.map((variant, index)=> {
                    console.log(index);
                    return(<option value={index}>Wariant {integer_to_roman(index + 1)}</option>);
                })
            }
        </select>

);

    const VariantDetails = (
      <div>
          {
              variant?.Kolor && (<span>Kolor: {variant?.Kolor}</span>)
          }
          {
              variant?.Przeszklenie && (<span>Przeszklenie: {variant?.Przeszklenie}</span>)
          }
      </div>
    );




    const VarationsForm = (
        Product?.Variant.length && (<div>
            <span>Warianty</span>




        </div>)
    );

    return(<div><Hero title={'Nasza Oferta'}/>
        <Container>
            <Row>
                <Col50>
                    <img src={Product?.Thumbnail?.url}/>
                </Col50>
                <Col50>
                    <Pagination/>
                <h2>{Product?.Name}</h2>
                    <div>{Product?.Price} zł</div>
                    {VariantSelectMarkup}


                    {variant?.Price} {variant?.id}
                    {VariantDetails}
                    <div>
                        <Quantity lessQuantity={decrecementQuantity} moreQuantity={incrementQuantity} value={quantity}/>
                        <Button>Dodaj do koszyka</Button>
                    </div>
                </Col50>
            </Row>
        </Container>
        <button onClick={()=> {
            console.log(variant);
            // console.log(findCurrentVariant());
            // setColorVariant('Czerwony');
        } }>siema</button>


    </div>)
}

export default SingleProduct;