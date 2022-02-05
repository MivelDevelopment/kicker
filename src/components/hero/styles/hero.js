import styled from 'styled-components';
import { BtnHolder as InnerContainer } from '../../slider/styles/slider';

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    margin-bottom: 0;
`;

export const Inner = styled(InnerContainer)`
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div``;

export const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center 30%;
`;

export const Title = styled.h1`
    font-size: 2.25rem;
    color: #fff;
    text-shadow: 0 0 6px #000;

    @media (min-width: 768px) {
        font-size: 3rem
    }
`;