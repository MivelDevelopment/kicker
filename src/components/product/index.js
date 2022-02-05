import React from 'react';

import {
    SectionContainer,
    Container,
    Inner,
    ContainerTitle,
    MarginalizedTitle,
    ItemFilter,
    ItemFilterButton,
    Card,
    ImageHolder,
    Image,
    InfoContainer,
    ItemTitle,
    ItemPrice,
    ItemFavorite,
    AddToCartButton,
    Link,
    SeeMore,
    LoadMore
} from './styles/product'

const Product = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Product.SectionContainer = ({ children, ...restProps }) => {
    return <SectionContainer {...restProps}>{children}</SectionContainer>
}

Product.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Product.Inner = ({ children, ...restProps }) => {
    return <Inner {...restProps}>{children}</Inner>
}

Product.ContainerTitle = ({ children, ...restProps }) => {
    return <ContainerTitle {...restProps}>{children}</ContainerTitle>
}

Product.MarginalizedTitle = ({ children, ...restProps }) => {
    return <MarginalizedTitle {...restProps}>{children}</MarginalizedTitle>
}

Product.ItemFilter = ({ children, ...restProps }) => {
    return <ItemFilter {...restProps}>{children}</ItemFilter>
}

Product.ItemFilterButton = ({ children, ...restProps }) => {
    return <ItemFilterButton {...restProps}>{children}</ItemFilterButton>
}

Product.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>
}

Product.ImageHolder = ({ children, ...restProps }) => {
    return <ImageHolder {...restProps}>{children}</ImageHolder>
}

Product.Image = ({ src, alt = '', author = '', unsplash = '', ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} />
}

Product.InfoContainer = ({ children, ...restProps }) => {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}

Product.ItemTitle = ({ children, ...restProps }) => {
    return <ItemTitle {...restProps}>{children}</ItemTitle>
}

Product.ItemPrice = ({ isOnSale = false, children, ...restProps }) => {
    return <ItemPrice isOnSale={isOnSale} {...restProps}>{children}</ItemPrice>
}

Product.ItemFavorite = ({ children, ...restProps }) => {
    return <ItemFavorite {...restProps}>{children}</ItemFavorite>
}

Product.AddToCartButton = ({ children, ...restProps }) => {
    return <AddToCartButton {...restProps}>{children}</AddToCartButton>
}

Product.Link = ({ to, children, ...restProps }) => {
    return <Link to={to} {...restProps}>{children}</Link>
}

Product.SeeMore = ({ to, children, ...restProps }) => {
    return <SeeMore to={to} {...restProps}>{children}</SeeMore>
}

Product.LoadMore = ({ children, ...restProps }) => {
    return <LoadMore {...restProps}>{children}</LoadMore>
}

export default Product
