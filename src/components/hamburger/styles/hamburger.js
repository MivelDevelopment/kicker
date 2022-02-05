import styled from 'styled-components/macro';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Container = styled.div`
    height: 100vh;
    width: ${({ open }) => open ? '100%' : 0};
    
    display: block;
    position: absolute;
    right: 0; top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    
    
    transition: 0s;

    @media (min-width: 768px) {
        display: none;
    }
`

export const Navigation = styled.nav`
    height: 100vh;
    min-width: 400px;
    padding-top: 10vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    position: absolute;
    right: 0; top: 0;
    background-color: #2b2b2b;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: .4s;

    @media (min-width: 768px) {
        display: none;
    }

    & > div {
        width: 100%;
        text-align: center; 
        transition: .15s;

        :hover {
        background-color: #fff;

            a {
                color: red;
                text-shadow: 0 0 7px rgba(0, 0, 0, .4);
            }
        }
    }
`

export const Button = styled.button`
    z-index: 1;
    position: relative;
    height: 2rem;
    width: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;

    &:focus,
    &:hover {
        outline: none;
    }

    & > div {
        z-index: 2;
        background-color: ${({ open }) => open ? '#fff' : '#333'};
        height: .25rem;
        width: 2rem;
        border-radius: 10px;
        transform-origin: 31px 2px;
        transition: .5s;

        :first-of-type {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
        :nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(-3rem)' : 'translateX(0px)'};
        }
        :last-of-type {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const NavLink = styled(RouterNavLink)`
    display: block;
    margin: 0;
    padding: 20px 0;

    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;

    transition: .2s;
`