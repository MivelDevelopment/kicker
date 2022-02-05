import React from 'react';
import {
    Container,
    Title,
    Desc,
    IconsContainer,
    IconRow,
    LinkAddress
} from './styles/contact-info';

const ContactInfo = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

ContactInfo.Title = ({ children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
};

ContactInfo.Desc = ({ children, ...restProps}) => {
    return <Desc {...restProps}>{children}</Desc>
};

ContactInfo.IconsContainer = ({ children, ...restProps}) => {
    return <IconsContainer {...restProps}>{children}</IconsContainer>
};

ContactInfo.IconRow = ({ children, ...restProps}) => {
    return <IconRow {...restProps}>{children}</IconRow>
};

ContactInfo.LinkAddress = ({ href="#", target="_blank", rel="noreferrer noopener nofollow", children, ...restProps}) => {
    return <LinkAddress href={href} target={target} rel={rel} {...restProps}>{children}</LinkAddress>
};

export default ContactInfo;