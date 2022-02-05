import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <Provider value={{ cart, setCart }}>
            {children}
        </Provider>
    )
}

export { CartContextProvider, Consumer as CartContextConsumer };