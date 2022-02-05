import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    padding: 0 30px;
    @media (min-width: 350px) {
        min-width: 300px;
    }
`;

export const Title = styled.h2`
    text-align: center;
`;

export const InfoData = styled.p``;

export const ThankYouMessage = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;