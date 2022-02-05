import React from 'react';
import { 
    Container,
    Icon,
    Message
} from './styles/cart-popup-warning'

const WarningPopup = ({ children, displayed, ...restProps }) => {
    return <Container displayed={displayed} {...restProps}>{children}</Container>
}

WarningPopup.Icon = ({ src="/img/warning-icon.png", ...restProps }) => {
    return <Icon src={src} alt="" {...restProps}/>
}

WarningPopup.Message = ({ children, ...restProps }) => {
    return <Message {...restProps}>{children}</Message>
}

export default WarningPopup;