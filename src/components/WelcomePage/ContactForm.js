import React from 'react'
import { useTranslation } from 'react-i18next'
import {InputField, OrangeInputButton, Span, TextField} from '../../styles/GlobalStyle'
import { ContactFormWrapper } from '../../styles/WelcomePageStyle'
import { useForm } from "react-hook-form";


function ContactForm() {
  const { t } = useTranslation()

  //TODO add errors for form validation
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitForm = (data) => {
    console.log(data);
  }

  return (
    <ContactFormWrapper onSubmit={handleSubmit(submitForm)}>
      <Span fontSize="30px">{t('NAME')}</Span>
      <InputField
        {...register("name", ({required: true}))}
        height="50px"
      />
      {errors.name && errors.name.type === "required" && <Span>{t('REQUIRED')}</Span>}
      <Span fontSize="30px">{t('MSG')}</Span>
      <TextField
        {...register("message", ({required: true}))}
        height="470px"
      />
      {errors.message && errors.message.type === "required" && <Span>{t('REQUIRED')}</Span>}
      <OrangeInputButton type="submit" value={t('SEND')}/>
    </ContactFormWrapper>
  )
}

export default ContactForm
