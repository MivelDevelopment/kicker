import React from 'react';
import {
    Container,
    Card,
    Image,
    LinkContainer,
    LinkText,
    Title
} from './styles/banner';

const Banner = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
};


Banner.Card = function BannerCard({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>
}

Banner.Image = function BannerImage({ ...restProps }) {
    return <Image {...restProps} />
}

Banner.LinkContainer = function BannerLinkContainer({ children, ...restProps }) {
    return <LinkContainer {...restProps}>{children}</LinkContainer>
}

Banner.Title = function BannerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Banner.LinkText = function BannerLinkText({ children, ...restProps }) {
    return <LinkText {...restProps}>{children}</LinkText>
}

export default Banner; 