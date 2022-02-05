import styled, {keyframes} from 'styled-components/macro';


const slideDown = keyframes`
    from {
        opacity: 0;
        margin-top: -5%;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 60px 0;
    display: grid;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Set = styled.details`

    &[open] summary ~ div {
        animation: ${slideDown} .3s linear;
    }

    &[open] summary::marker {
        
    }
`;

export const Question = styled.summary`
    position: relative;
    margin-bottom: 2px;
    padding: 1em;
    background-color: #fff;
    font-size: 1.125em;
    cursor: pointer;
    transition: .2s;

    :hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, .2)
    }

    ::marker {
        
    }
`;

export const Answer = styled.div`
    padding: .5em 2.375em;
    margin-top: 0px;
    background-color: white;
    margin-top: 0;
`;