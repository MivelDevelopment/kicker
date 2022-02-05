import React from 'react';
import { Minicart } from '../components';
import { handleAddToCartClick } from './handleAddToCartClick';
import { RemoveFromCartButton } from '../components';
import { CartContextConsumer } from '../context/cartContext';

export const ItemsInCart = ({ isDesktop = false }) => {


    return (
        <CartContextConsumer>
            {({ cart, setCart }) => (
                cart.length > 0 && cart.map((product, index) =>
                    isDesktop && index > 4
                        ? '' : (
                            <Minicart.Tooltip key={product.id} className="product-list-item" >
                                <RemoveFromCartButton
                                    onClick={() => handleAddToCartClick(product, cart, setCart)}
                                />
                                <Minicart.ItemName>{product.name}</Minicart.ItemName>
                                <Minicart.ItemPrice>
                                    {product.isOnSale
                                        ? ((100 - product.saleDiscount) / 100 * product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                                        : product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                                    }
                                </Minicart.ItemPrice>
                            </Minicart.Tooltip>
                        )
                )
            )}
        </CartContextConsumer>
    )

}