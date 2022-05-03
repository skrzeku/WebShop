import Styled from 'styled-components';
import {colorSecondary} from "./variables";


export const Price = Styled.p`
font-size: 15px;
color: ${colorSecondary};
    del {
    color: #bbb;
    }
    span {
    font-weight: bold;
    }
`;
