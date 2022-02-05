import styled from 'styled-components/macro';

export const AddToCartButton = styled.button`
    display: block;
    margin-top: 15px;
    padding: .5em 1.25em;

    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: none;
    transition: .2s;
    
    border: 1px solid black;
    color: ${({inCart}) => inCart ? '#fff' : '#000'};
    background-color: ${({inCart}) => inCart ? '#000' : '#fff'};
    :hover {
        color: #fff;
        background-color: ${({inCart}) => inCart ? 'red' : '#000'};
        border-color: ${({inCart}) => inCart ? 'red' : '#000'};
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2)
    }

    color: ${({inverse}) => inverse && '#fff'};
    background-color: ${({inverse}) => inverse && '#000'};

    :hover {
        color: ${({inverse}) => inverse && '#000'};
        background-color: ${({inverse}) => inverse && '#fff'};

        color: ${({inverse, inCart}) => inverse && inCart && '#000'};
        background-color: ${({inverse, inCart}) => inverse && inCart && '#fff'};
        border-color: ${({inverse}) => inverse && '#000'};
    }

`