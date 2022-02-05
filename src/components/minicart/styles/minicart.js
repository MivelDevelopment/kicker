import styled from 'styled-components/macro';

export const CartHolder = styled.div`
    position: relative;
`;

export const CartCount = styled.span`
    position: absolute;
    top: -6px; right: -9px;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    font-size: .875rem;
    padding: 0 .25rem;
    border-radius: 50%;
    cursor: default;
`;

export const ItemsContainer = styled.div`
    position: absolute;
    top: 22px; right: -26px;
    min-width: 300px;

    display: flex;
    flex-direction: column;

    color: #fff;
    border-radius: 10px 5px 10px 10px;
    background-color: #333;
    
    ::before {
        content: '';
        display: block;

        position: absolute;
        top: -42px; right: 3px;
        height: 0px;
        width: 0px;

        border: 32px solid transparent;
        border-bottom: 10px solid #333;
    }
`;

export const CartIcon = styled.img`
    width: auto;
    max-height: 20px;
    transition: .1s;

    &:hover {
        opacity: .5;
    }
`;

export const Tooltip = styled.div`
    display: grid;
    grid-template-columns: 22px 3fr 1fr;
    grid-gap: 15px;
    align-items: center;
    padding-left: 10px;
    
    border-bottom: 1px solid rgba(255, 255, 255, .1);
`;

export const ItemName = styled.span`
    display: block;
    padding: 10px 15px;
    padding-left: 5px;
    text-align: left;
    cursor: default;
`;

export const ItemPrice = styled(ItemName)`
    text-align: right;
`;

export const MoreAndTotalContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr
    justify-content: space-between;
`

export const TotalPrice = styled(ItemPrice)`
    text-align: center;
    font-size: .875rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;

    .total-price-amount {
        font-weight: 400;
    }
`;

export const SeeMore = styled(TotalPrice)`
    text-align: center;
    text-decoration: underline;
    color: #000;
    background-color: #ddd;
    border: 1px solid #333;
    border-radius: 0 0 10px 10px;
    
    position: relative;
    cursor: pointer;
    transition: .2s;

    &:hover {
        text-decoration: none;
        background-color: #fff;
    }

    &::after {
        content: '';
        position: absolute;
        height: 0px; width: 0px;
        top: 12px;
        display: inline-block;
        transition-delay: .2s;
        transition-duration: .2s;
        opacity: 0;
        margin-left: 0;

        border: 6px solid transparent;
        border-left: 6px solid #333;
    }

    &:hover::after {
        opacity: 1;
        margin-left: 10px;

    }
`;