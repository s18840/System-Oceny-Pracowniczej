import React from "react";
import { RegisterWrapper, RegisterFormWrapper, InputWrapper, Login, LoginButton } from '../styles/LoginStyle';
import {InputField, Span} from '../styles/GlobalStyle'


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
                    <Span fontSize = "20px">Username</Span>
                    <InputField width="357px" height="50px" name="username" type="text" ></InputField>
                </InputWrapper>

                <InputWrapper>
                    <Span fontSize = "20px">Password</Span>
                    <InputField width="357px" height="50px" name="password" type="password"  ></InputField>
                </InputWrapper>

                <LoginButton type="submit" value="login"></LoginButton>
                <Span fontSize = "20px" underlined >Forgot password ?</Span>

            </RegisterFormWrapper>
        </RegisterWrapper>
);
}

export default LoginForm;