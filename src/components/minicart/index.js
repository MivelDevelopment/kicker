import {
    CartHolder,
    CartIcon,
    CartCount,
    ItemsContainer,
    Tooltip,
    ItemName,
    ItemPrice,
    MoreAndTotalContainer,
    TotalPrice,
    SeeMore
} from './styles/minicart';

const Minicart = ({ children, ...restProps }) => {
    return <CartHolder {...restProps}>{children}</CartHolder>
}

Minicart.CartIcon = ({ src, ...restProps }) => {
    return <CartIcon src={src} {...restProps} />
}

Minicart.CartCount = ({ children, ...restProps }) => {
    return <CartCount {...restProps}>{children}</CartCount>
}

Minicart.ItemsContainer = ({ children, ...restProps }) => {
    return <ItemsContainer {...restProps}>{children}</ItemsContainer>
}

Minicart.Tooltip = ({ children, ...restProps }) => {
    return <Tooltip {...restProps}>{children}</Tooltip>
}

Minicart.ItemName = ({ children, ...restProps }) => {
    return <ItemName {...restProps}>{children}</ItemName>
}

Minicart.ItemPrice = ({ children, ...restProps }) => {
    return <ItemPrice {...restProps}>{children}</ItemPrice>
}

Minicart.MoreAndTotalContainer = ({ children, ...restProps }) => {
    return <MoreAndTotalContainer {...restProps}>{children}</MoreAndTotalContainer>
}

Minicart.SeeMore = ({ children, ...restProps }) => {
    return <SeeMore {...restProps}>{children}</SeeMore>
}

Minicart.TotalPrice = ({ children, ...restProps }) => {
    return <TotalPrice {...restProps}>{children}</TotalPrice>
}

export default Minicart;