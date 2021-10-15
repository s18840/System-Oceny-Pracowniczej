import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      src: url('../../public/fonts/Ubuntu-Regular.tft') format('truetype');
    }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu';
  }
`;


export const InputField = styled.input`
    width: ${props => props.width}; 
    height: ${props => props.height};
    border-radius: 44px;
    border: 2px solid #CCCCCC;
`;