import React from 'react';
import { CheckoutInfo } from '../../components';
import { BuyerInfoConsumer } from '../../context/buyerInfoContext';

export const CheckoutInfoDisplay = ({totalPrice}) => {
    
    return (
        <BuyerInfoConsumer>
            {({buyerName, email, address, phone}) => (
                <CheckoutInfo>
                    <CheckoutInfo.Title>Order complete!</CheckoutInfo.Title>
                    <CheckoutInfo.InfoData>Name: {buyerName}</CheckoutInfo.InfoData>
                    <CheckoutInfo.InfoData>Email: {email}</CheckoutInfo.InfoData>
                    <CheckoutInfo.InfoData>Address: {address}</CheckoutInfo.InfoData>
                    <CheckoutInfo.InfoData>Phone number: {phone}</CheckoutInfo.InfoData>
                    <CheckoutInfo.InfoData>Total price: {totalPrice}</CheckoutInfo.InfoData>
                    <CheckoutInfo.ThankYouMessage>Thank you for shopping with us!</CheckoutInfo.ThankYouMessage>
                </CheckoutInfo>
            )}
            
        </BuyerInfoConsumer>
    );
};