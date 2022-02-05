import React from 'react';

import { Hero } from '../components';

export const HeroContainer = ({src, alt, author, unsplash, title}) => {
    return (
        <Hero>
            <Hero.Image src={src} alt={alt} author={author} unsplash={unsplash} />
            <Hero.Inner>
                <Hero.TitleContainer>
                    <Hero.Title>{title}</Hero.Title>
                </Hero.TitleContainer>
            </Hero.Inner>
        </Hero>
    )
};