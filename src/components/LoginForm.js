import React from "react";
import { RegisterWrapper, RegisterFormWrapper, InputWrapper, Span, Login, LoginButton } from '../styles/LoginStyle';
import {InputField} from '../styles/GlobalStyle'


function LoginForm(){
//logic for login and sending authentication
//todo:  

// width: 357px; 
//     height: 50px;

return(
    <RegisterWrapper>
            <RegisterFormWrapper >
                <Login>login</Login>
                <InputWrapper>
                    <Span>Username</Span>
                    <InputField width="357px" height="50px" name="username" type="text" ></InputField>
                </InputWrapper>

                <InputWrapper>
                    <Span>Password</Span>
                    <InputField width="357px" height="50px" name="password" type="password"  ></InputField>
                </InputWrapper>

                <LoginButton type="submit" value="login"></LoginButton>
                <Span underlined >Forgot password ?</Span>

            </RegisterFormWrapper>
        </RegisterWrapper>
);
}

export default LoginForm;