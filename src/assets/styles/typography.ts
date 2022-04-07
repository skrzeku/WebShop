import Styled from 'styled-components';
import {colorSecondary} from "./variables";



export const SectionTitle = Styled.div`
color: black;
text-transform: uppercase;
border-bottom: solid 1px lightgray;
margin-bottom: 30px;
* {
display: inline-block;
font-size: 25px;
line-height: 45px;
border-bottom: solid 2px ${colorSecondary};
margin: 0;

}

`;