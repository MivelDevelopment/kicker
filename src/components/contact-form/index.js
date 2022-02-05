import React from 'react';
import {
    Container,
    Form,
    InputRow,
    Label,
    Submit
} from './styles/contact-form';

const ContactForm = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

ContactForm.Form = ({ children, ...restProps }) => {
    return <Form {...restProps}>{children}</Form>
};

ContactForm.InputRow = ({ children, ...restProps }) => {
    return <InputRow {...restProps}>{children}</InputRow>
};

ContactForm.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
};

ContactForm.Submit = ({ children, ...restProps }) => {
    return <Submit {...restProps}>{children}</Submit>
};

export default ContactForm;