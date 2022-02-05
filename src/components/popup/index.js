import React from 'react';
import { Overlay, Container, CloseBtn } from './styles/popup';


const Popup = ({children, ...restProps}) => {
    return <Overlay {...restProps}>{children}</Overlay>
};

Popup.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Popup.CloseBtn = ({ children, ...restProps }) => {
    return <CloseBtn {...restProps}>{children}</CloseBtn>
};

export default Popup;