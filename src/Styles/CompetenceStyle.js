import styled from "styled-components";

export const TableInfo = styled.table`
  margin-left: 430px;
  margin-top: 70px;
  margin-bottom: 25px ;
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
  justify-content: center ;
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
  background-color:  #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: 'Ubuntu';
`;
export const EditCompetenceButton = styled.button`
float: right;
margin-right: 250px;
  width: 200px;
  height: 40px;
  background-color:  #522d8a;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: 'Ubuntu';
`;

export const CompetenceDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;

export const InputField = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 24px;
  line-height: 30px;
  border-radius: 44px;
  border: 2px solid #cccccc;
  background-color: #DDDDDD;
  box-sizing: border-box;
  padding-left: 20px;
  max-lines: 1;
`
export const ProfileDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;
export const CompetenceWrapper = styled.div`
  margin-left: 450px ;
`
export const Name = styled.div`
`
export const MarkersTable = styled.div`
display:flex ;
justify-content: center ;
  flex-direction: column;
  display: table;
  font-weight: bold;
  color: #522d8a;
  text-align: center;
    margin: 0px ;
`
export const MarkersRow = styled.tr`
  text-align: center; 
  vertical-align: middle;
`