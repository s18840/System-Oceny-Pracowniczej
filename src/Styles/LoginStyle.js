import styled from "styled-components";

export const RegisterWrapper = styled.div`
    width: 464px;
    min-height: 570px;
    display: flex;
    flex-direction: column;
    padding-top: 72px;
    padding-bottom: 72px;
    align-items: center;
    background-color: #FFF3FD;
    border: 5px solid white;
    border-radius: 48px;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
`;


export const LoginButton = styled.input`
    width: 243px;
    height: 67px;
    background-color: #3D098A; 
    color: white;
    border-radius: 45px;
    font-size: 42px;
    font-family: 'Ubuntu';
`

export const RegisterFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > ${InputWrapper} {
        margin-bottom: 35px;
    }
    & > input[type=password] {
        margin-bottom: 30px;
    }
    & > input[type=submit] {
        margin-top: 10px;
    }
    & > input[type=button] {
        margin-top: 10px;
    }
`;

export const Login = styled.p`
    width: 357px;
    height: 52px;
    margin-top: 0px;
    margin-bottom: 100px;
    font-size: 78px;
    text-align: center;
    color: #FF4E01;
`;

export const Span = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: ${props => props.underlined ? 'underline' : ''};
    margin-left: 15px;
    font-size: 20;
    color: #FF4E01;
`;