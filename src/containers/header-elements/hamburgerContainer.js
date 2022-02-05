import React from 'react';
import { Hamburger } from '../../components';
import { HamburgerMenuToggle } from '../../helpers/hamburgerMenuToggle';

export const HamburgerContainer = () => {
    const { open, setOpen } = HamburgerMenuToggle()

    const closeMenu = e => {
        e.stopPropagation();
        setOpen(false);
    }

    return (
        <>
            <Hamburger open={open}>
                <Hamburger.Navigation open={open}>
                    <div>
                        <Hamburger.NavLink to="/" onClick={closeMenu} >Home</Hamburger.NavLink>
                    </div>
                    <div>
                        <Hamburger.NavLink to="/shop" onClick={closeMenu} >Shop</Hamburger.NavLink>
                    </div>
                    <div>
                        <Hamburger.NavLink to="/shipping" onClick={closeMenu} >Shipping</Hamburger.NavLink>
                    </div>
                    <div>
                        <Hamburger.NavLink to="/faq" onClick={closeMenu} >FAQ</Hamburger.NavLink>
                    </div>
                    <div>
                        <Hamburger.NavLink to="/contact" onClick={closeMenu} >Contact</Hamburger.NavLink>
                    </div>
                </Hamburger.Navigation>
            </Hamburger>
            <Hamburger.Button open={open} onClick={() => setOpen(!open)} >
                <div></div>
                <div></div>
                <div></div>
            </Hamburger.Button>
        </>
    )
}