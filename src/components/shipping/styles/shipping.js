import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1170px;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const HalfColumns = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    
    order: ${({ order }) => order === 1 && 3};

    @media (min-width: 768px) {
        width: 50%;
        padding: 0;

        order: ${({ order }) => order};
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;

    @media (min-width: 768px) {
        max-width: 585px;
    }
`;
