import React from 'react';
import {
    Container,
    Form,
    FormRow
} from './styles/checkout-popup-modal';

const Checkout = ({ children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
};

Checkout.Form = ({ children, ...restProps }) => {
    return <Form {...restProps}>{children}</Form>
};

Checkout.FormRow = ({ children, ...restProps }) => {
    return <FormRow {...restProps}>{children}</FormRow>
};

export default Checkout;