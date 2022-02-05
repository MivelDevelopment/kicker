import React from 'react';

import { WarningPopup } from '../../components'
import { WarningButtonsContainer } from './warningButtonsContainer';

export const WarningPopupContainer = ({ setCart, isWarningDisplayed, setIsWarningDisplayed }) => {
    return (
        <WarningPopup displayed={isWarningDisplayed} className="warning-container">
            <WarningPopup.Icon />
            <WarningPopup.Message>
                Are you sure you wish to clear everything from your cart?
            </WarningPopup.Message>

            <WarningButtonsContainer 
                setCart={setCart} 
                setIsWarningDisplayed={setIsWarningDisplayed} 
            />

        </WarningPopup>
    )
}