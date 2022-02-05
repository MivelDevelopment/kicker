import React from 'react';

import { AddToCartButton } from '../../components';
import { CartContextConsumer } from '../../context/cartContext';
import { BuyerInfoConsumer } from '../../context/buyerInfoContext';
import { handleAddToCartClick } from '../../helpers/handleAddToCartClick';

export const AddToCart = ({ product, ...restProps }) => {

    const handleClick = (product, cart, setCart, setFormSent) => {
        handleAddToCartClick(product, cart, setCart);
        setFormSent(false);
    }

    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                <BuyerInfoConsumer>
                    {({ setFormSent }) => (
                        <AddToCartButton
                            inCart={cart.some(item => item.id === product.id)}
                            onClick={() => handleClick(product, cart, setCart, setFormSent)}
                            {...restProps}
                        >
                            {cart.some(item => item.id === product.id)
                                ? 'Remove from cart'
                                : 'Add to cart'}
                        </AddToCartButton>

                    )}

                </BuyerInfoConsumer>
            )}
        </CartContextConsumer>
    )
}