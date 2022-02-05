import styled from 'styled-components';
import {Container as InfoContainer} from '../../contact-info/styles/contact-info';


export const Form = styled.form``;

export const Container = styled(InfoContainer)`
    background-color: #fff;
    
    &.form-centered {
        width: 100%;
        display: flex;
        align-items: center;

        & > * {
            width: 100%;
            max-width: 768px;
        }
    }
`;

export const InputRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    input,
    textarea {
        padding: .75rem .5rem;
        font-size: 1.25rem;
        border-radius: 5px;
        border: 1px solid #333;

        :focus ~ label,
        :hover ~ label {
            top: -12px;
        }
    }

    textarea {
        min-height: 6rem;
        font-family: 'Poppins','Oswald',sans-serif;
    }
`;

export const Label = styled.label`
    font-size: 1.25rem;
    margin-bottom: 1rem;
    position: absolute;
    top: 13px; left: 10px;
    background-color: #fff;
    padding: 0 5px;

    transition: .3s;
    
    top: ${({isActive}) => isActive ? '-12px;' : '13px'};
`;

export const Submit = styled.button`
    position: relative;
    font-size: 1.25rem;
    background-color: transparent;
    color: #333;
    border: 3px solid #333;
    border-radius: 5px;
    padding: .5em 1em;
    transition: .2s;
    z-index: 1;
    cursor: pointer;
    
    span {
        z-index: 2;
        background-color: transparent;
    }

    ::before {
        content: '';
        display: block;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 100%;
        height: 100%;
        background-color: #333;
        z-index: -1;
        transition: .3s;
    }

    :hover,
    :focus {
        color: #fff;
        color: ${({isSent}) => isSent && '#333'};

        ::before {
            right: 0;
            background-color: ${({isSent}) => isSent && 'lightgreen'};
        }
    }

    :focus {
        outline: 2px solid #333;
        border: 3px solid #fff;
    }

`;