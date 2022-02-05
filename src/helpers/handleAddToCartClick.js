export const handleAddToCartClick = (product, cart, setCart) => {
    cart.some(item => item.id === product.id)
        ? setCart(prevCart => prevCart.filter(item => item.id !== product.id))
        : setCart(prevCart => [...prevCart, product]);
};