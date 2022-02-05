import React from 'react';
import {
    ButtonContainer
} from './styles/cart-modal-buttons';

const CartModalButtons = ({ children, ...restProps }) => {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

export default CartModalButtons;