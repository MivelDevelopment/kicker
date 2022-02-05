import {
    FullwidthContainer,
    InnerContainer,
    LogoLink,
    LogoImage,
    Navbar,
    NavList,
    NavItem,
    NavLink
} from './styles/header';

const Header = ({ children, ...restProps }) => {
    return <FullwidthContainer {...restProps}>{children}</FullwidthContainer>
}

Header.InnerContainer = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

Header.LogoLink = ({ children, ...restProps }) => {
    return <LogoLink {...restProps}>{children}</LogoLink>
}

Header.LogoImage = ({ src, ...restProps }) => {
    return <LogoImage src={src} {...restProps} />
}

Header.Navbar = ({ children, ...restProps }) => {
    return <Navbar {...restProps}>{children}</Navbar>
}

Header.NavList = ({ children, ...restProps }) => {
    return <NavList {...restProps}>{children}</NavList>
}

Header.NavItem = ({ children, ...restProps }) => {
    return <NavItem {...restProps}>{children}</NavItem>
}

Header.NavLink = ({ children, ...restProps }) => {
    return <NavLink {...restProps}>{children}</NavLink>
}

export default Header;