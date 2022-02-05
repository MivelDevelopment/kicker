import React from 'react';
import {Container,
    Set,
    Question,
    Answer
} from './styles/faq';

const FAQ = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

FAQ.Set = ({ children, ...restProps }) => {
    return <Set {...restProps}>{children}</Set>
};

FAQ.Question = ({ children, ...restProps }) => {
    return <Question {...restProps}>{children}</Question>
};

FAQ.Answer = ({ children, ...restProps }) => {
    return <Answer {...restProps}>{children}</Answer>
};

export default FAQ;