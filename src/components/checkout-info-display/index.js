import React from 'react';
import { 
    Container, 
    Title, 
    InfoData, 
    ThankYouMessage
} from './styles/checkout-info-display';

const CheckoutInfo = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
};

CheckoutInfo.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
};

CheckoutInfo.InfoData = ({children, ...restProps}) => {
    return <InfoData {...restProps}>{children}</InfoData>
};

CheckoutInfo.ThankYouMessage = ({children, ...restProps}) => {
    return <ThankYouMessage {...restProps}>{children}</ThankYouMessage>
};

export default CheckoutInfo;