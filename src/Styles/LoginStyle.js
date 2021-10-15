import styled from "styled-components";

export const RegisterWrapper = styled.div`
    width: 464px;
    min-height: 570px;
    display: flex;
    flex-direction: column;
    padding-top: 72px;
    padding-bottom: 72px;
    align-items: center;
    background-color: #eaeaea;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

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
    margin: 0 0 64px;
    font-size: 52px;
    font-weight: 900;
    text-align: center;
    color: #22635e;
`;

export const Span = styled.div`
    margin-top: 10px;
    font-size: 0.8em;
`;