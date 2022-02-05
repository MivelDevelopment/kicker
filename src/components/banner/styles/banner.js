import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.section`
    max-width: 1170px;
    min-width: 0px;
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    overflow: hidden;
`

export const Card = styled.div`
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: ${({ objectPosition }) => objectPosition};
    position: relative;

    @media (min-width: 996px) {
        height: auto;
    }
`

export const LinkText = styled.span`
    position: absolute;
    bottom: 10%;
    left: 20px;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    transform: scale(.8);

    &::after {
        content: '';
        display: block;
        border-bottom: 2px solid #fff;
        width: 0%;
        transition: .2s ease-in;
        transition-delay: .3s;
        border-radius: 50%;
    }
`

export const LinkContainer = styled(Link)`
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0px;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    
    & > * {
        text-shadow: 0 0 6px #000;
        transition: opacity .3s, color .3s, transform .2s;
    }

    &:focus {
        outline: 0;
    }

    &:hover ${LinkText}, 
    &:focus ${LinkText} {
        color: red;
        opacity: 1;
        transform: scale(1);
    }
    &:hover ${LinkText}::after,
    &:focus ${LinkText}::after {
        width: 100%;
    }
`

export const Title = styled.span`
    font-size: 32px;
    line-height: 1.15;
    position: absolute;
    top: 20px;
    left: 20px;
`