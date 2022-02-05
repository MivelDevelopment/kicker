import React from 'react';
import { ProductsOnSaleContainer } from '../containers/onSaleContainer';
import { BannerContainer } from '../containers/bannersContainer';
import { SliderContainer } from '../containers/sliderContainer';

export const Home = () => {
    return (
        <>
            <SliderContainer />
            <BannerContainer />
            <ProductsOnSaleContainer />
        </>
    );
};