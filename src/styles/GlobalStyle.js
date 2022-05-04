import styled, { createGlobalStyle } from 'styled-components'

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
`

export const PageWrapper = styled.div`
    margin-left: 400px;
    margin-top: 80px;
`;

export const InputWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`

export const InputField = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 30px;
  line-height: 40px;
  border-radius: 44px;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  padding-left: 20px;
  max-lines: 1;
`

export const TextField = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 30px;
  line-height: 35px;
  border-radius: 44px;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  padding: 20px 20px 20px 20px;
  
`

export const Span = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.underlined ? 'underline' : '')};
  margin-left: 15px;
  font-size: ${(props) => props.fontSize};
  color: #ff4e01;
`

export const HighlightText = styled.a`
  color: #ff4e01;
  font-size: ${(props => props.fontSize)};
`

export const Title = styled.h1`
  text-align: ${(props) => props.textAligment};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: 130px;
  color: #ff4e01;
`

export const SubTitle = styled.h2`
  text-align: ${(props) => props.textAligment};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: 60px;
  color: #3D098A;
`

export const OrangeInputButton = styled.input`
  width: 243px;
  height: 67px;
  background-color: #ff4e01;
  color: white;
  border-radius: 45px;
  font-size: 42px;
  line-height: 67px;
  text-align: center;
`

export const GlobalButton = styled.button`
  width: 243px;
  height: 67px;
  background-color:  #3d098a;
  color: white;
  border-radius: 45px;
  font-size: 42px;
  line-height: 67px;
  text-align: center;
`
