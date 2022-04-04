import React from 'react';
import Styled from 'styled-components';

interface QuantityProps {
    lessQuantity: (event: React.MouseEvent<HTMLButtonElement>) => void;
    moreQuantity: (event: React.MouseEvent<HTMLButtonElement>) => void;
    value: number;
}

const QuantityWrapper = Styled.div`
display: inline-block;
  margin-right: 20px;
`;
const MinusBtn = Styled.button`
border: solid 1px gray;
border-start-start-radius: 20px;
border-end-start-radius: 20px;
-webkit-appearance: none;
height: 40px;
min-width: 25px;
background-color: transparent;
`;

const PlusBtn = Styled(MinusBtn)`
border-radius: 0;
border-start-end-radius: 20px;
border-end-end-radius: 20px;
`;

const InputNumber = Styled.input`
height: 40px;
border: solid 1px gray;
width: 35px;
text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

`;

const Quantity = ({lessQuantity, moreQuantity, value} : QuantityProps)=> {






    return(<QuantityWrapper>
        <MinusBtn onClick={lessQuantity}>-</MinusBtn>
        <InputNumber inputMode="numeric" type="number" value={value} />
        <PlusBtn onClick={moreQuantity}>+</PlusBtn>
    </QuantityWrapper>)
};


export default Quantity;