import React from 'react';
import {
    RedButton
} from './styles/cart-modal-button-red';

const RedBtn = ({ children, ...restProps }) => {
    return <RedButton {...restProps}>{children}</RedButton>
}

export default RedBtn;