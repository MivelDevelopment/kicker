import React, { useState, useEffect, useLayoutEffect } from 'react';

import products from '../data/products.json'
import { Product } from '../components'
import { SingleProduct } from './product-grid-elements/singleProductCard';
import { useSearchParams } from 'react-router-dom';

export const ProductContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams({ category: 'all' })
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [loadMore, setLoadMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const handleSelect = e => {
        if (e.target.textContent.toLowerCase() === selectedCategory) return
        setSearchParams({ category: e.target.textContent.toLowerCase() })
        setLoadMore(false)
    }



    useEffect(() => {
        setSelectedCategory(searchParams.get('category'));
    }, [searchParams])

    return (
        <Product.SectionContainer>
            <Product.Inner>
                <Product.ContainerTitle>{selectedCategory} sneakers</Product.ContainerTitle>
            </Product.Inner>
            <Product.Inner>
                <Product.ItemFilter>
                    <Product.ItemFilterButton onClick={handleSelect}>All</Product.ItemFilterButton>
                    <Product.ItemFilterButton onClick={handleSelect}>Kids</Product.ItemFilterButton>
                    <Product.ItemFilterButton onClick={handleSelect}>Boys</Product.ItemFilterButton>
                    <Product.ItemFilterButton onClick={handleSelect}>Girls</Product.ItemFilterButton>
                </Product.ItemFilter>
            </Product.Inner>
            <Product>
                {!loadMore
                    ? products.filter(product => selectedCategory === 'all' ? product : product.category === selectedCategory)
                        .slice(0, 6).map(product => <SingleProduct key={product.id} product={product} />)
                    : products
                        .filter(product => selectedCategory === 'all' ? product : product.category === selectedCategory)
                        .map(product => <SingleProduct key={product.id} product={product} />)
                }
            </Product>
            {loadMore ? '' :
                <Product.Inner>
                    <Product.LoadMore onClick={() => setLoadMore(true)}>Load More</Product.LoadMore>
                </Product.Inner>
            }
        </Product.SectionContainer>
    )
}