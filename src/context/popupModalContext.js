import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext();

const PopupModalProvider = ({ children }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [prevAction, setPrevAction] = useState('');

    const toggleCartPopup = (e) => {
        const isOverlay = e.target.classList.contains('popup-overlay');
        const isCloseBUtton = e.target.classList.contains('close-button');
        const isOrderButton = e.target.classList.contains('display-checkout') || e.target.parentNode.classList.contains('display-checkout');
        const isCartButton = e.target.classList.contains('display-cart') || e.target.parentNode.classList.contains('display-cart');
        
        const decideToOpen = !isOverlay && !isCloseBUtton;
        
        setIsOverlayOpen(decideToOpen)
        setPrevAction(isOrderButton ? 'display-checkout' : isCartButton ? 'display-cart' : prevAction);
    }

    return (
        <Provider value={{ isOverlayOpen, setIsOverlayOpen, toggleCartPopup, prevAction }}>
            {children}
        </Provider>
    )
};

export { PopupModalProvider, Consumer as PopupModalConsumer }