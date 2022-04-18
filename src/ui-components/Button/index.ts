import Styled from 'styled-components';
import {colorPrimary, colorSecondary} from "../../assets/styles/variables";


export const Button = Styled.button`
background-color: ${colorPrimary};
color: white;
padding: 10px 30px;
border-radius: 20px;
border: none;
font-size: 15px;
transition: 0.4s all ease-in-out;
text-transform: uppercase;
    &:hover {
    background-color: ${colorSecondary};
    }
`;