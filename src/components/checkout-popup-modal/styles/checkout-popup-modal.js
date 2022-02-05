import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Form = styled.form`
    max-width: 480px;
    
    & input {
        display: block;
        width: calc(100% - 12px);
        background-color: #e2e2e2;
        padding: 10px 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-top: 5px;
        margin-bottom: 1.75rem;
        font-size: 1rem;
        transition: background-color .2s, border-color .2s;

        :focus {
            background-color: #ccc;
            border: none;
            border-left: 2px solid #aaa;
            border-bottom: 2px solid #aaa;
        }

        :focus-visible {
            outline: none;
        }
    }

    @media (min-width: 400px) {
        min-width: 330px;
    }
    @media (min-width: 450px) {
        min-width: 380px;
    }
    @media (min-width: 500px) {
        min-width: 410px;
    }
    @media (min-width: 600px) {
        min-width: 480px;
    }
`;

export const FormRow = styled.div`
    
`;