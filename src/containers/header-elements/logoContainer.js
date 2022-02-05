import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components';

export const LogoContainer = () => {

    return (
        <Header.LogoLink>
            <Link to="/">
                <Header.LogoImage src="/img/logo.png" className="logo-img" />
            </Link>
        </Header.LogoLink>
    )
}