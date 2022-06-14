import React, {useState, useEffect, useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {useForm} from "react-hook-form";
import {InputWrapper, Login, LoginButton, LoginFormWrapper,} from '../../styles/LoginStyle'
import {InputField, Span} from '../../styles/GlobalStyle'
import {hashPassword, isPasswordCorrect} from '../../Utils/PasswordUtils'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../pages/Context';
//TODO add errors for form validation
function LoginForm() {
  const [context, setContext] = useContext(Context);
  let history = useHistory()
  const {t} = useTranslation()
  const {register, handleSubmit, formState: {errors}} = useForm();
  const submitForm = (data) => {
    // let hashedPassword = hashPassword(data.password)
    console.log("logowanie",data)
    history.push("/dashboard")
    //axios.post("https://localhost:5001/api/Account/login", data).then(({data}) => console.log(data));
    axios.post("https://localhost:5001/api/Account/login", data).then(({data}) => setContext(data));
  };


  return (
    <LoginFormWrapper onSubmit={handleSubmit(submitForm)}>
      <Login>{t('LOGIN')}</Login>
      <InputWrapper>
        <Span fontSize="20px">{t('Email')}</Span>
        <InputField
          {...register("email", ({required: true}))}
          width="357px"
          height="50px"
          type="text"
        />
        {errors.email && errors.email.type === "required" && <Span>{t('REQUIRED')}</Span>}

        <Span fontSize="20px">{t('PASSWD')}</Span>
        <InputField
          value={"Pa$$w0rd"}
          {...register("password", ({required: true}))}
          width="357px"
          height="50px"
          type="password"
        />
        {errors.password && errors.password.type === "required" && <Span>{t('REQUIRED')}</Span>}
      </InputWrapper>

      <LoginButton type="submit" value="login"/>
      <Span fontSize="20px" underlined>
        {t('FORGOT_PASSWD')}
      </Span>
    </LoginFormWrapper>
  )
}

export default LoginForm
