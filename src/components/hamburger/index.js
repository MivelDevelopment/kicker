import {
    Container,
    Navigation,
    Button,
    NavLink
} from './styles/hamburger';

const MobileMenu = ({ children, ...restProps }) => {
    return <Container {...restProps} >{children}</Container>
}

MobileMenu.Navigation = ({ children, ...restProps }) => {
    return <Navigation {...restProps}>{children}</Navigation>
}

MobileMenu.Button = ({ children, ...restProps }) => {
    return <Button {...restProps} >{children}</Button>
}

MobileMenu.NavLink = ({ children, to, ...restProps }) => {
    return <NavLink to={to} {...restProps}>{children}</NavLink>
}

export default MobileMenu