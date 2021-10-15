import React from "react";
import { RegisterWrapper, RegisterFormWrapper, InputWrapper, Span, Login } from '../Styles/LoginStyle';
import {Input} from '../styles/GlobalStyle'

function LoginForm(){
//logic for login and sending authentication
//todo:  


return(
    <RegisterWrapper>
            <RegisterFormWrapper >
                <Login>Login</Login>
                <InputWrapper>
                    <Input name="username" width="357px" height="60px" fontSize="1em" type="text" placeholder="Login"></Input>
                </InputWrapper>

                <InputWrapper>
                    <Input name="password" width="357px" height="60px" fontSize="1em" type="password" placeholder="Hasło" ></Input>
                </InputWrapper>

                <Input width="300px" height="44px" bgColor="#419bf9" fontSize="1em" type="submit" value="Zaloguj się"></Input>
                <Input width="300px" height="44px" bgColor="#f48473" fontSize="1em" type="button" value="Zarejestruj"></Input>

            </RegisterFormWrapper>
        </RegisterWrapper>
);
}

export default LoginForm;