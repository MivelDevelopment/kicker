import React from 'react';

import { Header } from '../../components';
import { MinicartContainer } from './minicartContainer';

export const NavbarContainer = () => {

    return (
        <Header.Navbar>
            <Header.NavList>
                <Header.NavItem>
                    <Header.NavLink to="/">Home</Header.NavLink>
                </Header.NavItem>

                <Header.NavItem>
                    <Header.NavLink to="/shop">Shop</Header.NavLink>
                </Header.NavItem>

                <Header.NavItem>
                    <Header.NavLink to="/shipping">Shipping</Header.NavLink>
                </Header.NavItem>

                <Header.NavItem>
                    <Header.NavLink to="/faq">FAQ</Header.NavLink>
                </Header.NavItem>

                <Header.NavItem>
                    <Header.NavLink to="/contact">Contact</Header.NavLink>
                </Header.NavItem>

                <Header.NavItem>
                    <MinicartContainer />
                </Header.NavItem>
            </Header.NavList>
        </Header.Navbar>
    )
}