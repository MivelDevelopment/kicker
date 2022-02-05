import React from 'react';
import { Header } from '../components';

import { NavbarContainer } from './header-elements/navbarContainer';
import { HamburgerContainer } from './header-elements/hamburgerContainer';
import { LogoContainer } from './header-elements/logoContainer'
import { stickyHeader } from '../helpers/stickyHeader'

export const HeaderContainer = () => {
    stickyHeader()

    return (
        <Header>
            <Header.InnerContainer>
                <LogoContainer />
                <NavbarContainer />
                <HamburgerContainer />
            </Header.InnerContainer>
        </Header>
    )
}