import React, { useState } from 'react';

import products from '../data/products.json'
import { Product } from '../components'
import { SingleProduct } from './product-grid-elements/singleProductCard';

export const ProductsOnSaleContainer = () => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <Product.SectionContainer>
            <Product.Inner>
                <Product.MarginalizedTitle>Products on sale</Product.MarginalizedTitle>
            </Product.Inner>

            <Product>
                {!loadMore
                    ? products.filter(product => product.isOnSale)
                        .slice(0, 6).map(product => <SingleProduct key={product.id} product={product} />)
                    : products.filter(product => product.isOnSale)
                        .map(product => <SingleProduct key={product.id} product={product} />)
                }
            </Product>

            {!loadMore
                ? <Product.Inner>
                    <Product.LoadMore onClick={() => setLoadMore(true)}>Load More</Product.LoadMore>
                </Product.Inner>
                : <Product.Inner>
                    <Product.Link to="/shop">
                        <Product.SeeMore>See other products</Product.SeeMore>
                    </Product.Link>
                </Product.Inner>
            }

        </Product.SectionContainer>
    )
}