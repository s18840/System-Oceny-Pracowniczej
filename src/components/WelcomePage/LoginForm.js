import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  InputWrapper,
  Login,
  LoginButton,
  LoginFormWrapper,
} from "../../styles/LoginStyle";
import { InputField, Span } from "../../styles/GlobalStyle";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../../pages/Context";

function LoginForm() {
  const [context, setContext] = useContext(Context);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [credentialsCorrect, setCredentialsCorrect] = useState(true);

  const submitForm = (data) => {

    axios
      .post(`${process.env.REACT_APP_API_ADDRESS}Account/login`, data)
      .then(({ data }) => {
        setContext(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("avatar", data.avatar);
        localStorage.setItem("employeeId", data.employeeId);
        localStorage.setItem("username", data.username);
        localStorage.setItem("roles", data.roles);
        history.push("/dashboard");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setCredentialsCorrect(false);
          return Promise.reject("Unauthrozied");
        }

        return Promise.reject("error");
      });
  };

  return (
    <LoginFormWrapper
      onSubmit={handleSubmit(submitForm)}
      onChange={() => {
        setCredentialsCorrect(true);
      }}
    >
      <Login> Login </Login>{" "}
      <InputWrapper>
        <Span fontSize="20px"> e-mail </Span>{" "}
        <InputField
          {...register("email", {
            required: true,
          })}
          width="357px"
          height="50px"
          type="text"
        />
        {errors.email && errors.email.type === "required" && (
          <Span> Required </Span>
        )}
        <Span fontSize="20px"> Password </Span>{" "}
        <InputField
          {...register("password", {
            required: true,
          })}
          width="357px"
          height="50px"
          type="password"
        />
        {errors.password && errors.password.type === "required" && (
          <Span> Required </Span>
        )}{" "}
        {credentialsCorrect === false && (
          <Span> Bad credentials </Span>
        )}
      </InputWrapper>
      <LoginButton type="submit" value="login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
