import React from 'react';

import { Minicart } from '../../components';
import { CartContextConsumer } from '../../context/cartContext';
import { PopupModalConsumer } from '../../context/popupModalContext';
import { calculateTotal } from '../../helpers/calculateTotal';
import { DisplayMinicartContents } from '../../helpers/displayTooltip';
import { ItemsInCart } from '../../helpers/itemsInCart';

export const MinicartContainer = () => {
    const { isMinicartHovered, displayTooltip, hideTooltip } = DisplayMinicartContents()

    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                <PopupModalConsumer>
                    {({ toggleCartPopup }) => (
                        <Minicart
                            className="minicart"
                            onMouseEnter={displayTooltip}
                            onMouseLeave={hideTooltip}
                        >
                            <Minicart.CartIcon src="/icons/shopping-cart.png" />
                            <Minicart.CartCount>{cart.length}</Minicart.CartCount>
                            {!isMinicartHovered || cart.length < 1 ? '' : (
                                <Minicart.ItemsContainer isDisplayed={isMinicartHovered}>

                                    <ItemsInCart cart={cart} setCart={setCart} isDesktop={true} />

                                    <Minicart.MoreAndTotalContainer>
                                        <Minicart.TotalPrice>Total: <span className="total-price-amount">{calculateTotal(cart)}</span></Minicart.TotalPrice>
                                        <Minicart.SeeMore onClick={toggleCartPopup} className="display-cart">Show full cart</Minicart.SeeMore>
                                    </Minicart.MoreAndTotalContainer>
                                </Minicart.ItemsContainer>
                            )}
                        </Minicart>

                    )}
                </PopupModalConsumer>
            )}
        </CartContextConsumer>
    )
}