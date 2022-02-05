import React from 'react';

import { HeroContainer } from '../containers/heroContainer';
import { FAQContainer } from '../containers/faqContainer';
import { FAQFormContainer } from '../containers/faqFormContainer';



export const FAQPage = () => {
    return (
        <>
            <HeroContainer src='/img/faq-page-hero-image.jpg' alt='shipping-page-hero-image' author='Craig Lovelidge' unsplash='@craigology' title="FAQ" />
            <FAQContainer />
            <FAQFormContainer />
        </>
    )
};