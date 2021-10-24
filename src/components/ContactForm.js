import React from "react";
import {InputField, OrangeInputButton, Span} from '../styles/GlobalStyle'
import { ContactFormWrapper } from "../styles/WelcomePageStyle";

function ContactForm(){
    //TODO logic for sending contact 

    return (
        <ContactFormWrapper>
            <Span fontSize = "30px" >nazwa</Span>
            <InputField name="name" height="50px" />
            <Span fontSize = "30px">wiadomość</Span>
            <InputField name="message" height="470px"/>
            <OrangeInputButton type="submit" value="wyślij"></OrangeInputButton>
        </ContactFormWrapper>
    );
}

export default ContactForm;