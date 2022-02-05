import React, { useState, useEffect } from 'react';

const { Provider, Consumer } = React.createContext();

const BuyerInfoProvider = ({ children }) => {
    const [buyerName, setBuyerName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [isFilledOut, setIsFilledOut] = useState(false);
    const [formSent, setFormSent] = useState(false);


    useEffect(() => {
        setIsFilledOut(buyerName && email && address && phone)
    }, [buyerName, email, address, phone])

    return (
        <Provider value={{ buyerName, setBuyerName, email, setEmail, address, setAddress, phone, setPhone, isFilledOut, setIsFilledOut, formSent, setFormSent }}>
            {children}
        </Provider>
    )
}

export { BuyerInfoProvider, Consumer as BuyerInfoConsumer };