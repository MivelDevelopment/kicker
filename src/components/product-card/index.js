import React from 'react';

import {
    Card,
    ImageHolder,
    Image,
    InfoContainer,
    ItemTitle,
    ItemPrice,
    SalePrice,
    ItemFavorite,
    AddToCartButton,
    LoadMore
} from './styles/productCard'

const ProductCard = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>
}

ProductCard.ImageHolder = ({ children, ...restProps }) => {
    return <ImageHolder {...restProps}>{children}</ImageHolder>
}

ProductCard.Image = ({ src, alt = '', author = '', unsplash = '', ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} className='grid-product-image' />
}

ProductCard.InfoContainer = ({ children, ...restProps }) => {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}

ProductCard.ItemTitle = ({ children, ...restProps }) => {
    return <ItemTitle {...restProps}>{children}</ItemTitle>
}

ProductCard.ItemPrice = ({ isOnSale = false, children, ...restProps }) => {
    return <ItemPrice isOnSale={isOnSale}{...restProps}>{children}</ItemPrice>
}

ProductCard.SalePrice = ({ isOnSale, children, ...restProps }) => {
    return <SalePrice isOnSale={isOnSale} {...restProps}>{children}</SalePrice>
}

ProductCard.ItemFavorite = ({ children, ...restProps }) => {
    return <ItemFavorite {...restProps}>{children}</ItemFavorite>
}

ProductCard.AddToCartButton = ({ children, ...restProps }) => {
    return <AddToCartButton {...restProps}>{children}</AddToCartButton>
}

ProductCard.LoadMore = ({ children, ...restProps }) => {
    return <LoadMore {...restProps}>{children}</LoadMore>
}

export default ProductCard
