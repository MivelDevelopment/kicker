import React from 'react';
import { CartModalButtons, RedBtn, BlackBtn } from '../../components'

export const WarningButtonsContainer = ({ setCart, setIsWarningDisplayed }) => {
    return (
        <CartModalButtons className="modal-buttons">
                <RedBtn onClick={() => setCart([])}>Confirm</RedBtn>
                <BlackBtn onClick={() => setIsWarningDisplayed(false)}>Cancel</BlackBtn>
            </CartModalButtons>
    )
}