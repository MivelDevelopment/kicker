import React from 'react';

import { ProductContainer } from '../containers/productGridContainer';
import { HeroContainer } from '../containers/heroContainer';

export const Shop = () => {
    return (
        <>
            <HeroContainer src='/img/shop-page-hero-image.jpg' alt='shop-page-hero-image' author='Craig Lovelidge' unsplash='@craigology' title="Shop" />
            <ProductContainer />
        </>
    )
}