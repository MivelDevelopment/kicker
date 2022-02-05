import React from 'react';
import {
    Container,
    InnerContainer,
    Column,
    Logo,
    Title,
    Copyright
} from './styles/footer';

const Footer = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Footer.InnerContainer = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
};

Footer.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
};

Footer.Logo = ({ src, ...restProps }) => {
    return <Logo src={src} {...restProps} />
};

Footer.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
};

Footer.Copyright = ({ children, ...restProps }) => {
    return <Copyright {...restProps}>{children}</Copyright>
};

export default Footer;