import React, {useEffect, useState} from 'react';
import Hero from "../../components/Hero";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IProduct, IProductVariant} from "../../store/reducers/productsReducer";
import {State} from "../../store/rootReducer";
import {Col50, Container, Row} from "../../assets/styles/global";
import index from "../HomePage";


const SingleProduct:React.FC = ()=> {
    let { id } = useParams();
    // console.log(typeof id);
    // console.log(useParams());
    const Product = useSelector<State, IProduct | undefined>(state => state.products.find((item) => item.id == Number(id)));


    const [glassVariant, setGlassVariant] = useState<string>('tak');
    const [colorVariant, setColorVariant] = useState<string >('');
    const [variant, setVariant] = useState<IProductVariant>();


    useEffect(()=> {
        if (Product) {
            console.log('Wykonano');
            setVariant(Product?.Variant[0]);
            // setColorVariant(Product?.Variant[0].A);
        }

    },[Product]);








    const DisplayAttributeValues = (name: string)=>  [...new Set (Product?.Variant.map((one, ind)=> {

        const lol = one.Attr
            .filter((oni, index)=> {
               return (oni.Name == name)
            })
            .map((attr)=> {
                return attr.Value
            })[0];

        // ind === 0 && console.log('dzia;a');
        // console.log(Product?.Variant[0]);

        return lol
    }).filter(i => {
        return i;
    }))];
    const SelectMarkup = (Attribute: string[] | undefined, method: (str: string)=> void)=>{
        return(
        <select  onChange={e => {
            method(e.target.value);
            findCurrentVariant();

        }}
        value={colorVariant}>
            {
                Attribute?.map((one)=> {
                    return(<option value={one}> {one}</option>)
                })
            }
        </select>
        )
    };

    // const GlassAttributes = DisplayAttributeValues("Przeszklenie");
    // const ColorAttributes = DisplayAttributeValues("Kolor");
    // const GlassSelects = SelectMarkup(GlassAttributes, setGlassVariant);
    // const ColorSelects = SelectMarkup(ColorAttributes, setColorVariant);

    const findCurrentVariant = () : void => {
        console.log('wykonano');
        const Variant = Product?.Variant.find((variant:IProductVariant)=> {
            return variant.Attr.find((one)=> {
                console.log(colorVariant);
               return  one.Name === "Kolor" && one.Value === colorVariant
            })
        });
        console.log(Product?.Variant[0]);
        Variant? setVariant(Variant) : setVariant(Product?.Variant[0]);
        // setVariant(Variant);
        // return Variant? Variant : Product?.Variant[0];
    };
    // findCurrentVariant();


    // console.log(findCurrentVariant(glassVariant, colorVariant));
    // console.log(glassVariant);

    const VarationsForm = (
        Product?.Variant.length && (<div>
            <span>Warianty</span>
            <label>Przeszklenie</label>
            {/*{*/}
            {/*GlassSelects*/}
            {/*}*/}
            {/*{*/}
            {/*    ColorSelects*/}
            {/*}*/}


        </div>)
    );

    return(<div><Hero title={'Nasza Oferta'}></Hero>
        <Container>
            <Row>
                <Col50>Slider</Col50>
                <Col50>
                <h2>{Product?.Name}</h2>
                    <div>{Product?.Price} zł</div>
                    {VarationsForm}
                    {/*{findCurrentVariant(glassVariant, colorVariant)?.Price}*/}
                    {variant?.Price} {variant?.id}
                </Col50>
            </Row>
        </Container>
        <button onClick={()=> {
            console.log(Product);
            // console.log(findCurrentVariant());
            // setColorVariant('Czerwony');
        } }>siema</button>


    </div>)
}

export default SingleProduct;