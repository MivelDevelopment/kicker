import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.section`
    width: 100%;
    max-height: 900px;
    overflow: hidden;
    margin-bottom: 60px;
`

export const ImageHolder = styled.div`
    width: 100%;
    max-height: 60vh;
    overflow: hidden;
    height: auto;
    position: relative;

    @media (min-width: 768px) {
        max-height: 900px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 900px;
    object-fit: cover;
    object-position: center 30%;
`

export const BtnHolder = styled.div`
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.1);
`

export const CTAContainer = styled.div`
    max-width: 50vw;
    
    text-align: center;

    @media (min-width: 1170px) {
        margin-top: -25%;
    }
`;

export const ImageCaption = styled.span`
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 0 0 6px #000;

    @media (min-width: 768px) {
        font-size: 2rem
    }
`;

export const BtnBox = styled.div`
    width: 5vw;
    height: 5vw;
    min-width: 40px;
    min-height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: rgba(255, 255, 255, .7);
    transition: .2s;
    overflow: hidden;

    @media (min-width: 1170px) {
        width: 4vw;
        height: 4vw;
    }
`

const moveToRight = keyframes`
    0% {
        transform: translateX(0);
    }
    
    49.99% {
        transform: translateX(250%);
    } 

    50% {
        transform: translateX(-250%);
    }

    100% {
        transform: translateX(0);
    }
`

export const IconHolder = styled.span`
    position: relative;
    overflow: hidden;
`;


export const NextBtn = styled.button`
    display: flex;
    height: 100%;
    padding: 100% 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: .2s;
    font-size: 3ch;

    &:hover {
        background-color: rgba(255, 255, 255, 0.7);

        ${BtnBox} {
            background-color: transparent;
        }

        ${IconHolder} {
            animation: ${moveToRight} .3s;
            animation-direction: normal;
        }
    }

    @media (min-width: 1300px) {
        z-index: 2;
    }
`
export const PrevBtn = styled(NextBtn)`
    &:hover {
        ${IconHolder} {
            animation-direction: reverse;
        }
    }
`;