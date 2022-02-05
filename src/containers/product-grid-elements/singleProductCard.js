import React from 'react';

import { ProductCard } from '../../components';
import { AddToCart } from './addToCartButton';
import { QuickviewContainer } from '../quickviewContainer';
import { ToggleQuickview } from '../../helpers/toggleQuickview'

export const SingleProduct = ({ product, ...restProps }) => {
    const { isOpenQuickview, toggleQuickviewDisplay } = ToggleQuickview()


    return (
        <ProductCard {...restProps}>
            {isOpenQuickview &&
                <QuickviewContainer
                    product={product}
                    isOpenQuickview={isOpenQuickview}
                    toggleQuickviewDisplay={toggleQuickviewDisplay}
                />
            }
            <ProductCard.ImageHolder>
                <ProductCard.Image
                    src={product.url}
                    alt={product.name}
                    author={product.imageAuthor}
                    unsplash={product.authorUnsplash}
                    className='grid-product-image'
                    onClick={e => toggleQuickviewDisplay(e)}
                />
            </ProductCard.ImageHolder>
            <ProductCard.InfoContainer>
                <ProductCard.ItemTitle>
                    {product.name}
                </ProductCard.ItemTitle>
                <ProductCard.ItemPrice isOnSale={product.isOnSale}>
                    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </ProductCard.ItemPrice>
                {product.isOnSale &&
                    <ProductCard.SalePrice>
                        {
                            ((100 - product.saleDiscount) / 100 * product.price)
                                .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                        }
                    </ProductCard.SalePrice>
                }

                <AddToCart product={product} />

            </ProductCard.InfoContainer>
        </ProductCard>
    )
}