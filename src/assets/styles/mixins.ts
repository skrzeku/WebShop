import Styled from 'styled-components';

interface OverlayProps {
    color: string
    opacity: string
}


export const Overlay = (color:string, opacity:string)=> `
position: relative;
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(${color},  ${opacity});
        content: '';
    }
`;