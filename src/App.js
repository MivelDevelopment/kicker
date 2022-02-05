import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Shipping } from './pages/shipping';
import { FAQPage } from './pages/faq';
import { Contact } from './pages/contact';

import { HeaderContainer } from './containers/headerContainer';
import { FooterContainer } from './containers/footerContainer';
import { MobileButtonsContainer } from './containers/mobileButtonsContainer';
import { PopupModalConsumer } from './context/popupModalContext';
import { PopupContainer } from './containers/popup-modal/popupContainer';

import { ScrollToTopOnChange } from './helpers/scrollToTopOnChange';

const App = () => {
    return (
        <>
            <HeaderContainer />
            <ScrollToTopOnChange>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ScrollToTopOnChange>
            <FooterContainer />
            <MobileButtonsContainer />
            <PopupModalConsumer>
                {({ isOverlayOpen }) => (
                    <PopupContainer
                        isOverlayOpen={isOverlayOpen}
                    />
                )}
            </PopupModalConsumer>


        </>
    );
};

export default App;
