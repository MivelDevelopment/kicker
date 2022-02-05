export const calculateTotal = arr => {
    return arr.map(item => item.isOnSale ? ((100 - item.saleDiscount) / 100 * item.price) : item.price)
        .reduce((val, acc) => acc + val, 0)
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};