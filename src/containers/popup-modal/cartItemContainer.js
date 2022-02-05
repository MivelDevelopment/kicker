import React from 'react';
import { CartModal } from '../../components';
import { ItemsInCart } from '../../helpers/itemsInCart';
import { calculateTotal } from '../../helpers/calculateTotal';

export const CartItemContainer = ({cart, isWarningDisplayed, setIsWarningDisplayed}) => {
    return (
        <CartModal.ItemContainer>
            <>
                {cart.length < 1 && <h3>Your cart is empty</h3>}
                {cart.length > 0 && !isWarningDisplayed && (
                <>
                    <CartModal.ModalTitle>
                        Cart
                    </CartModal.ModalTitle>

                    <ItemsInCart />

                    <CartModal.TotalPrice>Total: {calculateTotal(cart)}</CartModal.TotalPrice>
                </> 
                )}
            </>
        </CartModal.ItemContainer>
    );
};

