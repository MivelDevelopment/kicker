import styled from 'styled-components/macro';


export const Container = styled.footer`
    background-color: #333;
    width: 100%;
    min-height: 300px;
    padding-top: 40px;

    hr {
        max-width: 1170px;
    }
`;

export const InnerContainer = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    color: #fff;
    
    display: grid;
    
    grid-gap: 40px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    }
`;

export const Column = styled.div`
    &.logo-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 2.125em;
    }

    :not(:last-of-type)::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 50%;

        @media (min-width: 768px) {
            display: none;
        }
    }
`;

export const Logo = styled.img`
    display: block;
    width: 100%;
    height: auto;
    max-width: 300px;
    margin: 20px 0;

    @media (min-width: 1024px) {
        margin: 20px auto;
    }
`;

export const Title = styled.span`
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const Copyright = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 1.25em 0 1.75em;
    color: #fff;
    text-align: center;
`;