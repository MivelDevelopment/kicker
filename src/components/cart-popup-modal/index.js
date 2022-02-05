import React from 'react';
import {
    Container, 
    ModalTitle, 
    ItemContainer,
    TotalPrice
} from './styles/cart-popup-modal';

const CartModal = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

CartModal.ModalTitle = ({ children, ...restProps }) => {
    return <ModalTitle {...restProps}>{children}</ModalTitle>
};

CartModal.ItemContainer = ({ children, ...restProps }) => {
    return <ItemContainer {...restProps}>{children}</ItemContainer>
};

CartModal.TotalPrice = ({ children, ...restProps }) => {
    return <TotalPrice {...restProps}>{children}</TotalPrice>
};


export default CartModal;