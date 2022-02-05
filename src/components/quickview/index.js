import React from 'react';
import {
    Overlay,
    Container,
    Image,
    ProductDetails,
    CloseButton,
    Title,
    Description,
    ReadMoreButton,
    Price,
    SalePrice
} from './styles/quickview';

const Quickview = ({ displayed, children, ...restProps }) => {
    return <Overlay {...restProps} displayed={displayed} className="overlay">{children}</Overlay>
};

Quickview.Container = ({ children, ...restProps }) => {
    return <Container {...restProps} className="quickview-content">{children}</Container>
};

Quickview.Image = ({ src, alt, author, unsplash, ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} className='grid-product-image' />
};

Quickview.ProductDetails = ({ children, ...restProps }) => {
    return <ProductDetails {...restProps}>{children}</ProductDetails>
};

Quickview.CloseButton = ({ children, ...restProps }) => {
    return <CloseButton {...restProps} className="close-quickview">{children}</CloseButton>
};

Quickview.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
};

Quickview.Description = ({ children, ...restProps }) => {
    return <Description {...restProps}>{children}</Description>
};

Quickview.ReadMoreButton = ({ children, ...restProps }) => {
    return <ReadMoreButton {...restProps}>{children}</ReadMoreButton>
}

Quickview.Price = ({ isOnSale, children, ...restProps }) => {
    return <Price isOnSale={isOnSale} {...restProps}>{children}</Price>
};

Quickview.SalePrice = ({ isOnSale, children, ...restProps }) => {
    return <SalePrice isOnSale={isOnSale} {...restProps}>{children}</SalePrice>
};

export default Quickview;