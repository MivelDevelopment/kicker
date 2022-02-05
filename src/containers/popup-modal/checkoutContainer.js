import React, { useState } from 'react';
import { BuyerInfoConsumer } from '../../context/buyerInfoContext';
import { CartContextConsumer } from '../../context/cartContext';
import { CheckoutForm } from './checkoutForm';
import { CheckoutInfoDisplay } from './checkoutInfoDisplay';


export const CheckoutContainer = () => {
    const [totalPrice, setTotalPrice] = useState('');

    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                <BuyerInfoConsumer>
                    {({ formSent, setFormSent }) => (
                        !formSent
                            ? <CheckoutForm
                                cart={cart}
                                setCart={setCart}
                                setFormSent={setFormSent}
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                            />
                            : <CheckoutInfoDisplay totalPrice={totalPrice} />
                    )}

                </BuyerInfoConsumer>
            )}
        </CartContextConsumer>
    );
};