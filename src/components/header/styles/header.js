import styled from 'styled-components/macro';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const FullwidthContainer = styled.header`
    width: 100%;
    position: relative;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6));
    z-index: 1;
    
    @media (min-width: 1170px) {
        position: fixed;
    }
`

export const InnerContainer = styled.div`
    max-width: 1170px;
    padding: 5px 25px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 1170px) {
        padding: 0;
        margin: 10px auto;
    }
`

export const LogoLink = styled.span`
    cursor: pointer;
`;
export const LogoImage = styled.img`
    max-width: 200px;
    height: auto;
    transition: .3s;
`;

export const Navbar = styled.nav`
    display: none;
    
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

`;
export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`;
export const NavItem = styled.li`
    margin-right: 30px;

    &:last-of-type {
        margin-right: 0px;
        a {
            padding-right: 0;
        }
    }
`;
export const NavLink = styled(RouterNavLink)`
    padding: 5px 10px;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .15s;

    &:hover {
        color: red;
        text-shadow: 0 0 7px rgba(0, 0, 0, .4);
    }
`;
