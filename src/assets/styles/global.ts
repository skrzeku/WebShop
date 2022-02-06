import Styled from 'styled-components';

interface RowProps {
    flexCenter?: any
    spaceBetween?: any
    m0? : any;
}



export const Container = Styled.div`
padding: 30px 15px;
width: 90%;
max-width: 1500px;
margin: 0 auto;
`;


export const Row = Styled.div<RowProps>`
margin: ${props => props.m0? '0' : '0 -15px'};
display: flex;
flex-direction: row;
flex-flow: row wrap;
align-items: ${props => props.flexCenter ? "center" : "unset"};
justify-content: ${props => props.spaceBetween? 'space-between' : ''}
`;

export const Col50 = Styled.div`
padding: 10px;
// width: 100%;
width: 50%;

// height: 20px;
flex: 1;

`;

export const Col4 = Styled.div`
    width: 100%;
    padding: 15px;
    flex: 0 0 33.333%;
    max-width: 33.333%;
    `;

export const Col3 = Styled.div`
    width: 100%;
    padding: 15px;
    flex: 0 0 25%;
    max-width: 25%;
    `;



export const Col9 = Styled.div`
    width: 100%;
    flex: 0 0 75%;
    padding: 15px;
    max-width: 75%;
    `;