import React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import sha256 from 'crypto-js/sha256'

import {
  LoginFormWrapper,
  InputWrapper,
  Login,
  LoginButton,
} from '../../styles/LoginStyle'
import { InputField, Span } from '../../styles/GlobalStyle'

//TODO add errors for form validation
function LoginForm() {
  const { t } = useTranslation()
  var log = require('loglevel')
  const { register, handleSubmit} = useForm();
  const submitForm = (data) => {
    console.log(data);

    //TODO encrypt password

    // const hashedPassword = bcrypt.hashSync(data.password, salt);

    // let credentials = {
    //   "username": data.username,
    //   "password": hashedPassword
    // };

    // console.log(credentials);/
  };


  return (
      <LoginFormWrapper onSubmit={handleSubmit(submitForm)}>
        <Login>{t('LOGIN')}</Login>
        <InputWrapper>
          <Span fontSize="20px">{t('USERNAME')}</Span>
          <InputField
            {...register("username", ({required: true}))}
            width="357px"
            height="50px"
            name="username"
            type="text"
          />

          <Span fontSize="20px">{t('PASSWD')}</Span>
          <InputField
            {...register("password", ({required: true}))}
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
