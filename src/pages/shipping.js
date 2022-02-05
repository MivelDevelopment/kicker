import React from 'react';

import { HeroContainer } from '../containers/heroContainer';
import { ShippingContainer } from '../containers/shippingContainer';
import { FAQFormContainer } from '../containers/faqFormContainer';

export const Shipping = () => {
    return (
        <>
            <HeroContainer src='/img/shipping-page-hero-image.jpg' alt='shipping-page-hero-image' author='Craig Lovelidge' unsplash='@craigology' title="Shipping" />
            <ShippingContainer />
            <FAQFormContainer />
        </>
    )
}