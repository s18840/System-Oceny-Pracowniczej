import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 1.2em;
    font-family: ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
  }
`;

export const InputField = styled.input`
    border-radius: 10px;
    border: 2px solid #CCCCCC;
    height: 18px;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
`;