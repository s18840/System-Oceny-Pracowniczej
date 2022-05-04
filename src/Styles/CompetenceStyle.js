import styled from "styled-components";

export const TableInfo = styled.table`
  margin-left: 430px;
  margin-top: 70px;
  margin-bottom: 25px;
  width: 78%;
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

export const InputField = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 24px;
  line-height: 30px;
  border-radius: 44px;
  border: 2px solid #cccccc;
  background-color: #dddddd;
  box-sizing: border-box;
  padding-left: 20px;
  max-lines: 1;
`;
export const ProfileDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
  padding-bottom: 5px;
`;
export const CompetenceWrapper = styled.div`
  border: 3px #707070;
  border-style: solid;
  border-radius: 20px;
  margin-left: 450px;
  margin-right: 50px;
  min-width: 420px;
`;

export const CompetenceInsideWrapper = styled.div`
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
  width: 20%;
  min-width: 300px;
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
  margin-left: 50px;
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