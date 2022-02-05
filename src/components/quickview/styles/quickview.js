import styled from 'styled-components/macro';

export const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, .3);
    z-index: 1;
    overflow: hidden;
`;

export const Container = styled.div`
    position: relative;
    max-width: 1172px;
    width: 95%;
    height: 80vh;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(20vh, 30vh) minmax(30vh, 40vh);
    
    @media (min-width: 768px) {
        grid-template-columns: auto minmax(50%, 1fr);
        grid-template-rows: 1fr;
    }
`;

export const Image = styled.img`
    height: 30vh;
    width: 100%;
    object-fit: cover;
    object-position: center center;

    border-radius: 10px 0 0 0px;

    @media (min-width: 768px) {
        height: 80vh;
        border-radius: 10px 0 0 10px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0; right: 0;
    min-width: 40px;
    min-height: 40px;
    background-color: #333;
    border: none;
    color: #fff;
    cursor: pointer;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    transition: .2s;

    &:hover {
        background-color: #fff;
        color: #333;
    }

`;

export const ProductDetails = styled.div`
    display: flex;
    height: 43vh;

    flex-direction: column;
    justify-content: space-between;
    padding: 0 10% 40px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    overflow-y: auto;

    & > div {
        color: #333;
    }

    @media (min-width: 768px) {
        height: auto;
        border-radius: 0 0 10px 0;
        overflow: hidden;
        padding: 10%;
    }

`;

export const Title = styled.h2`
    font-size: 1.75rem;
`;

export const Description = styled.p`
    margin-bottom: 1.5rem;
`;

export const ReadMoreButton = styled.div`
    margin-top: -.5rem;
    font-size: .875rem;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;

    & > span {
        padding: .5rem;
        padding-left: 0;
        text-decoration: underline;
        cursor: pointer;

        :hover {
            text-decoration: none;
        }
    }
`;

export const Price = styled.p`
    font-size: ${({ isOnSale }) => isOnSale ? "1rem" : "1.25rem"};
    text-decoration: ${({ isOnSale }) => isOnSale ? "line-through" : "none"};
    margin: 2rem 0 0;

    @media (min-width: 768px) {
        margin: ${({ isOnSale }) => isOnSale ? "2rem 0 -.75rem" : "1em 0"};

    }
`;

export const SalePrice = styled.p`
    font-size: 1.25rem;
    margin: .25em 0 0;

    @media (min-width: 768px) {
        margin: 1em 0;
    }
`;