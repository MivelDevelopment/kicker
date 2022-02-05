import React from 'react';
import {
    Container
} from './styles/clear-cart-modal';

const ClearCartModal = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}