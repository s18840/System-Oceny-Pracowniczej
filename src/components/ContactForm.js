import React from 'react'
import { useTranslation } from 'react-i18next'
import { InputField, OrangeInputButton, Span } from '../styles/GlobalStyle'
import { ContactFormWrapper } from '../styles/WelcomePageStyle'

function ContactForm() {
  const { t } = useTranslation()
  // TODO logic for sending contact

  return (
    <ContactFormWrapper>
      <Span fontSize="30px">{t('NAME')}</Span>
      <InputField name="name" height="50px" />
      <Span fontSize="30px">{t('MSG')}</Span>
      <InputField name="message" height="470px" />
      <OrangeInputButton type="submit" value={t('SEND')}></OrangeInputButton>
    </ContactFormWrapper>
  )
}

export default ContactForm
