import React from 'react';

import { HeroContainer } from '../containers/heroContainer';
import { ContactFormContainer } from '../containers/contactFormContainer';
import { ContactInfoContainer } from '../containers/contactInfoContainer';

export const Contact = () => {
    return (
        <>
            <HeroContainer src='/img/contact-page-hero-image.jpg' alt='contact-page-hero-image' author='Craig Lovelidge' unsplash='@craigology' title="Contact us"/>
            <div className="flex-half">
                <ContactFormContainer />
                <ContactInfoContainer />
            </div>
        </>
    )
}