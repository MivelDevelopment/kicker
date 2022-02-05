import {
    Container,
    Button,
    ProductCount
} from './styles/mobile-bottom-buttons';

const MobileBottomButtons = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

MobileBottomButtons.Button = ({ href, children, ...restProps }) => {
    return <Button href={href} {...restProps}>{children}</Button>
}

MobileBottomButtons.ProductCount = ({ children, ...restProps }) => {
    return <ProductCount {...restProps}>{children}</ProductCount>
}

export default MobileBottomButtons;