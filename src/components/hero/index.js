import React from 'react';
import {
    Container,
    Inner,
    TitleContainer,
    Image,
    Title
} from './styles/hero';

const Hero = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Hero.Inner = ({ children, ...restProps }) => {
    return <Inner {...restProps}>{children}</Inner>
};

Hero.TitleContainer = ({ children, ...restProps }) => {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
};

Hero.Image = ({ src, alt, author, unsplash, ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} />
};

Hero.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
};

export default Hero;