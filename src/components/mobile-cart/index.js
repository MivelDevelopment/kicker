import {
    Overlay,
    Container,
} from './styles/mobile-cart';

const MobileCart = ({ children, ...restProps }) => {
    return <Overlay {...restProps}>{children}</Overlay>
};

MobileCart.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};