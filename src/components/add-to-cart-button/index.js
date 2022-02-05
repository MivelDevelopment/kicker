import React from 'react';

import { AddToCartButton } from './styles/addToCartButton';

const Button = ({ children, ...restProps }) => {
    return <AddToCartButton {...restProps}>{children}</AddToCartButton>
}

export default Button
