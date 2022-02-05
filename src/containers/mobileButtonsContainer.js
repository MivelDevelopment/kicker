import React from 'react';
import { MobileBottomButtons } from '../components';
import { ScrollingDown } from '../helpers/scrollDirection';
import { CartContextConsumer } from '../context/cartContext'
import { PopupModalConsumer } from '../context/popupModalContext';

export const MobileButtonsContainer = () => {
    const isGoingDown = ScrollingDown();


    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                <>
                    <PopupModalConsumer>
                        {({ toggleCartPopup }) => (
                            <>
                                <MobileBottomButtons isGoingDown={isGoingDown} setCart={setCart}>
                                    <MobileBottomButtons.Button className="display-checkout" onClick={toggleCartPopup}>
                                        <img src="/img/delivery-truck-icon.png" alt="order-button" className="display-checkout"/>
                                    </MobileBottomButtons.Button>

                                    <MobileBottomButtons.Button className="display-cart" onClick={toggleCartPopup}>
                                        <span>
                                            <img src="/img/shopping-cart.png" alt="cart-button" className="display-cart"/>
                                            <MobileBottomButtons.ProductCount>{cart.length}</MobileBottomButtons.ProductCount>
                                        </span>
                                    </MobileBottomButtons.Button>
                                </MobileBottomButtons>
                            </>
                        )}
                    </PopupModalConsumer>
                </>
            )}
        </CartContextConsumer>
    );
};