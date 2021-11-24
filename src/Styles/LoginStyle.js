import styled from "styled-components";

export const LoginFormWrapper = styled.form`
  height: 70%;
  grid-area: login;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #fff3fd;
  border: 5px solid white;
  border-radius: 48px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.input`
  width: 243px;
  height: 67px;
  background-color: #3d098a;
  color: white;
  border-radius: 45px;
  font-size: 42px;
  font-family: "Ubuntu";
`;

export const Login = styled.a`
  font-size: 78px;
  text-align: center;
  color: #ff4e01;
`;
