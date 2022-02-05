import React, {useState, useEffect} from 'react';
import { Popup } from '../../components'
import { CartContextConsumer } from '../../context/cartContext'
import { PopupModalConsumer } from '../../context/popupModalContext'
import { WarningPopupContainer } from './warningPopupContainer';
import { CartItemContainer } from './cartItemContainer';
import { CartButtonsContainer } from './cartButtonsContainer';
import { CheckoutContainer } from './checkoutContainer';

export const PopupContainer = ({isOverlayOpen}) => {
    const [isWarningDisplayed, setIsWarningDisplayed] = useState(false);

    useEffect(() => {
        !isOverlayOpen && setIsWarningDisplayed(false);
    }, [isOverlayOpen])

    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                <PopupModalConsumer>
                {({ isOverlayOpen, setIsOverlayOpen, toggleCartPopup, prevAction }) => (
                
                    <Popup open={isOverlayOpen} onClick={toggleCartPopup} className="popup-overlay" >
                        <Popup.Container className="overlay-items-container" onClick={toggleCartPopup}>
                            
                            {prevAction === 'display-checkout' 
                            ?  <CheckoutContainer className="display-checkout" />
                            : <>

                            {cart.length > 0 && isWarningDisplayed &&
                            <WarningPopupContainer 
                                className="display-cart"
                                setCart={setCart} 
                                isWarningDisplayed={isWarningDisplayed} 
                                setIsWarningDisplayed={setIsWarningDisplayed} 
                            /> }

                            <CartItemContainer 
                                className="display-cart"
                                cart={cart}
                                isWarningDisplayed={isWarningDisplayed} 
                                setIsWarningDisplayed={setIsWarningDisplayed} 
                            />
                            
                            {cart.length > 0 && !isWarningDisplayed && 
                            <CartButtonsContainer 
                                className="display-cart"
                                setIsWarningDisplayed={setIsWarningDisplayed}
                            /> }

                            </>}

                            <Popup.CloseBtn className="close-button" onClick={() => setIsOverlayOpen(false)} >X</Popup.CloseBtn>
                        </Popup.Container>
                    </Popup >
                )}
            </PopupModalConsumer>
            )}
        </CartContextConsumer>
    )
}