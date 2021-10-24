import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      src: url('../assets/fonts/Ubuntu-Regular.tft') format('truetype');
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

export const Span = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: ${props => props.underlined ? 'underline' : ''};
    margin-left: 15px;
    font-size: ${props => props.fontSize};
    color: #FF4E01;
`;

export const HiglightText = styled.a`
  color: #FF4E01;
`

export const Title = styled.h1`
  text-align: ${props => props.textAligment};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  font-size: 130px;
  color: #FF4E01;
`

export const OrangeInputButton = styled.input`
  width: 243px;
  height: 67px;
  background-color: #FF4E01; 
  color: white;
  border-radius: 45px;
  font-size: 42px;
  line-height: 67px;
  text-align: center;
`