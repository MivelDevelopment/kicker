import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 3em 2em;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const Title = styled.h2`
    text-align: center;
`;

export const Desc = styled.p`
    text-align: center;
`;

export const IconsContainer = styled.div`
    &.fa-icons-row {
        margin: 28px auto 0;
        max-width: 350px;
    }
`;

export const IconRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.75rem;

    &.insta-row {
        padding-left: 7px;

        svg:first-of-type {
            padding-right: 11px;
        }
    }
    &.tiktok-row {
        padding-left: 8px;

        svg:first-of-type {
            padding-right: 10px;
        }
    }
    &.discord-row {
        padding-left: 0;

        svg:first-of-type {
            padding-right: 5px;
        }
    }
    &.face-row {
        padding-left: 7px;

        svg:first-of-type {
            padding-right: 11px;
        }
    }
`;

export const LinkAddress = styled.a`
    font-size: 1.25rem;
    color: #333;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .15s;
    word-break: break-word;

    &:hover {
        color: red;
        text-shadow: 0 0 7px rgba(0, 0, 0, .4);
    }
`;