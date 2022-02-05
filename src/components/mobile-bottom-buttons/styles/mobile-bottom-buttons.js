import styled from 'styled-components/macro';
import { CartCount } from '../../minicart/styles/minicart';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    left: 0; 
    bottom: ${({ isGoingDown }) => isGoingDown ? '0px' : '-50px'};


    background-color: #000;;
    border-top: 2px solid #000;
    max-height: 70px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2px;
    transition: .2s;

    @media (min-width: 768px) {
        display: none;
    }
    z-index: 2;

`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: lightblue;
    padding: 5px;
    cursor: pointer;
    
    & img {
        max-height: 36px;
    }
    & > span {
        position: relative;
    }


`;

export const ProductCount = styled(CartCount)`
    
    top: -3px; right: -8px;
`