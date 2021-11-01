import React from 'react'
import { useTranslation } from 'react-i18next'
import {InputField, OrangeInputButton, Span, TextField} from '../../styles/GlobalStyle'
import { ContactFormWrapper } from '../../styles/WelcomePageStyle'
import { useForm } from "react-hook-form";


function ContactForm() {
  const { t } = useTranslation()

  //TODO add errors for form validation
  const { register, handleSubmit, watch, errors } = useForm();
  const submitForm = (data) => {
    console.log(data);
  }

  return (
    <ContactFormWrapper onSubmit={handleSubmit(submitForm)}>
      <Span fontSize="30px">{t('NAME')}</Span>
      <InputField
        {...register("name")}
        name="name"
        height="50px"
      />
      <Span fontSize="30px">{t('MSG')}</Span>
      <TextField
        {...register("message")}
        name="message"
        height="470px"
      />
      <OrangeInputButton type="submit" value={t('SEND')}/>
    </ContactFormWrapper>
  )
}

export default ContactForm
