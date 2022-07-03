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
export const NewButton = styled.button`
  float: right;
  margin-right: 50px;
  width: 200px;
  height: 40px;
  background-color: #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: "Ubuntu";
`;
export const EditButton = styled.button`
  float: right;
  margin-right: 250px;
  width: 200px;
  height: 40px;
  background-color: #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: "Ubuntu";
`;
export const AddButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #efaa8c;
  color: white;
  border: 2px solid #cccccc;
  border-radius: 45px;
  font-size: 24px;
  font-family: "Ubuntu";
  justify-self: center;
  align-self: center;
  margin-left: 110px;
  :hover {background-color: #EA6E38}

  :active {
    background-color: #EA6E38;
    transform: translateY(1px);
  }
`;

export const TableInfo = styled.table`
  margin-left: 430px;
  margin-top: 70px;
  margin-bottom: 35px;
  width: 76%;
  flex-direction: column;
  display: table;
  font-size: 42px;
  font-weight: bold;
  color: #522d8a;
  text-align: center;
`;

export const Row = styled.tr`
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px #666;
  height: 100px;
`;

export const TableDetailsDate = styled.td`
  font-size: 25px;
  font-weight: bold;
  color: #ff4e01;
`;

export const TableDetails = styled.td`
  font-size: 25px;
  font-weight: bold;
  color: #522d8a;
`;
export const TableDetailsMarker = styled.td`
  font-size: 25px;
  font-weight: bold;
  color: #522d8a;
  justify-content: center;
`;

export const PersonalDataHeadingText = styled.div`
  margin-left: 450px;
  margin-top: 100px;
  font-size: 42px;
  font-weight: bold;
  color: #522d8a;
`;
export const NewCompetenceButton = styled.button`
  float: right;
  margin-right: 50px;
  width: 200px;
  height: 40px;
  background-color: #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: "Ubuntu";
`;
export const EditCompetenceButton = styled.button`
  float: right;
  margin-right: 250px;
  width: 200px;
  height: 40px;
  background-color: #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: "Ubuntu";
`;

export const CompetenceDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;

export const ProfileDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
  padding-bottom: 5px;
`;
export const Wrapper = styled.div`
  border: 3px #707070;
  border-style: solid;
  border-radius: 20px;
  margin-left: 450px;
  margin-right: 50px;
  margin-bottom: 25px ;
  min-width: 420px;
  padding-bottom: 5px ;
`;

export const InsideWrapper = styled.div`
  margin: 10px;
`;

export const Markers = styled.table`
  margin: 10px;
`;

export const Heading = styled.div`
padding-top: 5px ;
  padding-bottom: 5px;
`;
export const MarkersTable = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  color: #522d8a;
  text-align: center;
`;
export const MarkersRow = styled.tr`
  text-align: center;
  vertical-align: middle;
`;

export const MarkersWrapper = styled.div`
  border: 0.25px gray;
  border-radius: 20px;
  border-style: solid;
  width: 35%;
  min-width: 400px;
`;
export const MarkersSmallWrapper = styled.div`
  border: 0.25px gray;
  border-radius: 20px;
  border-style: solid;
  width: 20%;
  min-width: 350px;
`;

export const DescriptionField = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 30px;
  line-height: 35px;
  border-radius: 25px;
  background-color: #DDDDDD ;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  padding: 20px 20px 20px 20px;
`;

export const MarkersAddButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #efaa8c;
  color: white;
  border: 2px solid #cccccc;
  border-radius: 45px;
  font-size: 24px;
  font-family: "Ubuntu";
  justify-self: center;
  align-self: center;
  margin-left: 80px;
  :hover {background-color: #EA6E38}

  :active {
    background-color: #EA6E38;
    transform: translateY(1px);
  }
`;


export const TableMarkers = styled.table`
  font-size: 24px;
  font-weight: bold;
  color: #522d8a;
`;

export const RowLi = styled.li`
  margin-left: 20px;
  display: flex;
  padding-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

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
