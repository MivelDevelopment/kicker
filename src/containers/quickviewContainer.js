import React from 'react';
import { Quickview } from '../components';
import { AddToCart } from './product-grid-elements/addToCartButton';
import { ReadMoreDescription } from '../helpers/readMore';

export const QuickviewContainer = ({ product, isOpenQuickview, toggleQuickviewDisplay, children, ...restProps }) => {
    const {
        shortDescription,
        isFullDescription,
        ToggleReadMore } = ReadMoreDescription(product.description)

    return (
        <Quickview {...restProps} onClick={toggleQuickviewDisplay}>
            <Quickview.Container >
                <Quickview.Image
                    src={product.url}
                    alt={product.name}
                    author={product.imageAuthor}
                    unsplash={product.authorUnsplash}
                />
                <Quickview.ProductDetails>
                    <div>
                        <Quickview.Title>
                            {product.name}
                        </Quickview.Title>
                        <Quickview.Description>
                            {window.innerWidth < 768 && !isFullDescription ? shortDescription : product.description}
                        </Quickview.Description>

                        {window.innerWidth <= 768 &&
                            <Quickview.ReadMoreButton>
                                <span onClick={ToggleReadMore}>Read {isFullDescription ? 'less' : 'More'}</span>
                            </Quickview.ReadMoreButton>
                        }


                        <Quickview.Price isOnSale={product.isOnSale}>
                            {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </Quickview.Price>
                        {product.isOnSale &&
                            <Quickview.SalePrice>
                                {
                                    ((100 - product.saleDiscount) / 100 * product.price)
                                        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                                }
                            </Quickview.SalePrice>
                        }
                    </div>

                    <AddToCart product={product} inverse={true} />

                </Quickview.ProductDetails>
                <Quickview.CloseButton>X</Quickview.CloseButton>
            </Quickview.Container>
        </Quickview>
    )
}

/*
    Overlay,
    Container,
    Image,
    ProductDetails,
    CloseButton,
    Title,
    Description,
    Price
*/