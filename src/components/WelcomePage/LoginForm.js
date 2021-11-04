import React from 'react'
import {useTranslation} from 'react-i18next'
import {useForm} from "react-hook-form";
import {InputWrapper, Login, LoginButton, LoginFormWrapper,} from '../../styles/LoginStyle'
import {InputField, Span} from '../../styles/GlobalStyle'
import {hashPassword, isPasswordCorrect} from '../../Utils/PasswordUtils'


//TODO add errors for form validation
function LoginForm() {
  const {t} = useTranslation()
  const {register, handleSubmit, formState: {errors}} = useForm();
  const submitForm = (data) => {
    let hashedPassword = hashPassword(data.password)
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
          type="text"
        />
        {errors.username && errors.username.type === "required" && <Span>{t('REQUIRED')}</Span>}

        <Span fontSize="20px">{t('PASSWD')}</Span>
        <InputField
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
