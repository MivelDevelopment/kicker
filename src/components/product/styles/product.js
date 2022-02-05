import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const SectionContainer = styled.section`
    background-color: #e3e3e3;
    padding: 40px 0;
`

export const Container = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    background-color: #e3e3e3;
`

export const Inner = styled(Container)`
    display: flex;
    justify-content: space-around;
`

export const ContainerTitle = styled.h2`
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
`

export const MarginalizedTitle = styled(ContainerTitle)`
    margin: 3rem 0;
`;

export const ItemFilter = styled.nav`
    display: block;
    margin-bottom: 2rem;
`

export const ItemFilterButton = styled.button`
    font-size: 1.5rem;
    color: #333;
    margin: 0 10px;
    padding: 10px;
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    :hover {
        color: #000;
    }

    &::after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 50%;
        width: 0%;
        position: absolute;
        bottom: 10px; left: 10px;
        transition: .3s;
    }

    &:hover::after,
    &:focus::after {
        width: calc(100% - 20px);
    }
`
export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    object-position: center bottom;
    transition: .3s;
`

export const Card = styled.div`
    width: 100%;
    transition: .2s;

    &:hover,
    &:focus {
        background-color: #fff;
        box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.2);
    }
    &:hover ${Image},
    &:focus ${Image} {
        transform: scale(1.1);
    }
`

export const ImageHolder = styled.div`
    width: 100%;
    max-height: 300px;
    overflow: hidden;
`

export const InfoContainer = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    & > * {
        padding: 0 10px
    }
`

export const ItemTitle = styled.span`
    font-size: 1.375rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
`

export const ItemPrice = styled.span`
    font-size: 1.125rem;
`

export const ItemFavorite = styled.span``

export const AddToCartButton = styled.button`
    display: block;
    margin-top: 15px;
    border: 1px solid black;
    background-color: white;
    padding: .5em 1.25em;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: none;
    transition: .2s;

    :hover {
        background-color: #000;
        color: #fff;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2)
    }
`

export const Link = styled(RouterLink)`
    text-decoration: none;
`;

export const SeeMore = styled(AddToCartButton)`
    margin-top: 2em;
    padding: 1em;
    position: relative;
`

export const LoadMore = styled(SeeMore)`
    &::after {
        content: '';
        position: absolute;
        right: calc(50% - 10px);
        bottom: -30px;
        opacity: 0;
        border: 10px solid transparent;
        border-top-color: black;
        transition: .3s;

    }

    &:hover::after {
        opacity: 1;
        
        bottom: -25px;
    }
`