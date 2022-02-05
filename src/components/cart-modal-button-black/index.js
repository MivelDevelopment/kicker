import React from 'react';
import {
    BlackButton
} from './styles/cart-modal-button-black';

const BlackBtn = ({ children, ...restProps }) => {
    return <BlackButton {...restProps}>{children}</BlackButton>
}

export default BlackBtn;