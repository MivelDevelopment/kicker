import React from 'react';
import bannerImages from '../data/banner-images.json';
import { Banner } from '../components';

export const BannerContainer = ({ children, ...restProps }) => {
    return (
        <Banner {...restProps}>
            {bannerImages.map(image => (
                <Banner.Card key={image.id}>
                    <Banner.Image src={image.url} alt={image.alt} objectPosition={image.position} />
                    <Banner.LinkContainer to={`/shop?category=${image.alt}`}>
                        <Banner.Title>
                            {image.alt} sneakers
                        </Banner.Title>
                        <Banner.LinkText>
                            shop now
                        </Banner.LinkText>
                    </Banner.LinkContainer>
                </Banner.Card>
            ))}
        </Banner>
    );
};