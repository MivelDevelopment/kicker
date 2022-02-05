import React from 'react';
import {
    Container,
    HalfColumns,
    Image
} from './styles/shipping';

const Shipping = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Shipping.HalfColumns = ({ order, children, ...restProps }) => {
    return <HalfColumns order={order} {...restProps}>{children}</HalfColumns>
};

Shipping.Image = ({ src, alt, author, unsplash, ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} />
};

export default Shipping