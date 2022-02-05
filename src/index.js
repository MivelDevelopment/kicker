import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { GlobalStyles } from './global-styles';
import { CartContextProvider } from './context/cartContext';
import { PopupModalProvider } from './context/popupModalContext';
import { BuyerInfoProvider } from './context/buyerInfoContext';

ReactDOM.render(<>
    <GlobalStyles />
    <BrowserRouter>
        <CartContextProvider>
            <PopupModalProvider>
                <BuyerInfoProvider>
                    <App />
                </BuyerInfoProvider>
            </PopupModalProvider>
        </CartContextProvider>
    </BrowserRouter>
</>,
    document.getElementById('root'))