import React from "react";
import { RegisterWrapper, RegisterFormWrapper, InputWrapper, Login, LoginButton } from '../styles/LoginStyle';
import {InputField, Span} from '../styles/GlobalStyle'
import {useTranslation} from 'react-i18next'


function LoginForm(){
    const {t} = useTranslation();
//logic for login and sending authentication

return(
    <RegisterWrapper>
            <RegisterFormWrapper >
                <Login>{t('LOGIN')}</Login>
                <InputWrapper>
                    <Span fontSize = "20px">{t('USERNAME')}</Span>
                    <InputField width="357px" height="50px" name="username" type="text" ></InputField>
                </InputWrapper>

                <InputWrapper>
                    <Span fontSize = "20px">{t('PASSWD')}</Span>
                    <InputField width="357px" height="50px" name="password" type="password"  ></InputField>
                </InputWrapper>

                <LoginButton type="submit" value="login"></LoginButton>
                <Span fontSize = "20px" underlined >{t('FORGOT_PASSWD')}</Span>

            </RegisterFormWrapper>
        </RegisterWrapper>
);
}

export default LoginForm;