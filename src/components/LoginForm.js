import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  LoginFormWrapper,
  InputWrapper,
  Login,
  LoginButton,
} from '../styles/LoginStyle'
import { InputField, Span } from '../styles/GlobalStyle'

function LoginForm() {
  const { t } = useTranslation()
  // logic for login and sending authentication

  return (
      <LoginFormWrapper>
        <Login>{t('LOGIN')}</Login>
        <InputWrapper>
          <Span fontSize="20px">{t('USERNAME')}</Span>
          <InputField
            width="357px"
            height="50px"
            name="username"
            type="text"
          />

          <Span fontSize="20px">{t('PASSWD')}</Span>
          <InputField
            width="357px"
            height="50px"
            name="password"
            type="password"
          />
        </InputWrapper>

        <LoginButton type="submit" value="login"/>
        <Span fontSize="20px" underlined>
          {t('FORGOT_PASSWD')}
        </Span>
      </LoginFormWrapper>
  )
}

export default LoginForm
