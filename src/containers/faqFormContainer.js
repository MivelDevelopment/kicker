import React, { useState } from 'react';
import { ContactForm, ContactInfo } from '../components';

export const FAQFormContainer = () => {
    const [userInput, setUserInput] = useState({ name: '', email: '', message: '' });
    const [isMessageSent, setIsMessageSent] = useState(false);


    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setIsMessageSent(false)
        setUserInput(prevValue => (
            { ...prevValue, [name]: value }
        ))
    }

    const handleSubmit = e => {
        e.preventDefault();

        setUserInput({ name: '', email: '', message: '' })
        setIsMessageSent(true)
    }

    return (
        <>
            <ContactForm className="form-centered">
                <ContactInfo.Title>Haven't found the information you need?<br />Feel free to ask us directly</ContactInfo.Title>
                <ContactForm.Form onSubmit={handleSubmit}>

                    <ContactForm.InputRow>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            tabIndex="1"
                            onChange={handleChange}
                            value={userInput.name}
                            required
                        />
                        <ContactForm.Label
                            htmlFor="name"
                            isActive={userInput.name.length > 0}
                        >
                            Name
                        </ContactForm.Label>
                    </ContactForm.InputRow>

                    <ContactForm.InputRow>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            tabIndex="2"
                            onChange={handleChange}
                            value={userInput.email}
                            required
                        />
                        <ContactForm.Label
                            htmlFor="email"
                            isActive={userInput.email.length > 0}
                        >
                            Email
                        </ContactForm.Label>
                    </ContactForm.InputRow>

                    <ContactForm.InputRow>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            tabIndex="3"
                            onChange={handleChange}
                            value={userInput.message}
                            required
                        ></textarea>
                        <ContactForm.Label
                            htmlFor="message"
                            isActive={userInput.message.length > 0}
                        >
                            Message
                        </ContactForm.Label>
                    </ContactForm.InputRow>

                    <ContactForm.Submit
                        isSent={isMessageSent}
                        tabIndex="4"
                    >
                        <span>{!isMessageSent ? 'Send Message' : 'Message Sent!'}</span>
                    </ContactForm.Submit>
                </ContactForm.Form>
            </ContactForm>
        </>
    )
}