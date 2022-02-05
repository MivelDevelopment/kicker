import styled from 'styled-components/macro';

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    object-position: center bottom;
    transition: .3s;
    cursor: pointer;
`

export const Card = styled.div`
    width: 100%;
    transition: .2s;
    border: 1px solid #ccc;

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

    & > *:not(button) {
        padding: 0 10px
    }
`

export const ItemTitle = styled.span`
    font-size: 1.375rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
`

export const ItemPrice = styled.span`
    font-size: ${({ isOnSale }) => isOnSale ? ".875rem" : '1.125rem'};
    text-decoration: ${({ isOnSale }) => isOnSale ? "line-through" : 'none'};
`

export const SalePrice = styled.span`
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
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
    }
`

export const LoadMore = styled(AddToCartButton)`
    margin-top: 2em;
    padding: 1em;
    position: relative;
    border-radius: 10px;

    &::after,
    &::before {
        content: '';
        position: absolute;
        display: block;
        opacity: 0;
        border: 10px solid transparent;
        top: calc(50% - 10px);
        transition: left .1s, right .1s;
    }

    &::after {
        border-left-color: black;
        right: -8px;
    }

    &::before {
        border-right-color: black;
        left: -8px;
    }

    &:hover {
        ::before {
            opacity: 1;
            left: -12px;
            transform: rotateY(180deg);
        }
        ::after {
            opacity: 1;
            right: -12px;
            transform: rotateY(180deg);
        }
    }
`