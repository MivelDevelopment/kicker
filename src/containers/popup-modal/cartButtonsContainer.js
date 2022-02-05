import React from 'react';
import { CartModalButtons, RedBtn, BlackBtn } from '../../components'

export const CartButtonsContainer = ({setIsWarningDisplayed}) => {
    return (
        <CartModalButtons className="modal-buttons">
            <RedBtn onClick={() => setIsWarningDisplayed(true)}>Clear cart</RedBtn>
            <BlackBtn className="display-checkout">Checkout</BlackBtn>
        </CartModalButtons>
    )
}