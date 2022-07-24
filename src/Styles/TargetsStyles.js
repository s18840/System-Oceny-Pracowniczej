import styled from "styled-components";
import {InputField, OrangeInputButton, Span, TextField} from "./GlobalStyle";
import {ImPlus} from "react-icons/im";

export const TargetForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 10em 0 10em;
  row-gap: 5em;
`;

export const TargetInputField = styled(InputField)`
  height: 5em
`

export const TargetTextField = styled(TextField)`
  resize: none;
  height: 5em
`

export const ActionButton = styled(OrangeInputButton)`
  background: #3d098a;
`

export const PlusIcon = styled(ImPlus)`
  color: #ff4e01;
`

export const TargetListTitlesWrapper = styled.div`
  margin: 0 17.5%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`

export const TargetsListWrapper = styled.div`
  border: 2px solid #3D098A;
  border-radius: 5px;
  margin: 2% 10%;
  display: flex;
  flex-direction: column;
`

export const TargetContainer = styled.div`
  display: flex;
  margin: 2% 10%;
  border: 2px solid #3D098A;
  border-radius: 5px;
  padding: 2.5em 0;
  justify-content: space-evenly;
`

export const AddTargetContainer = styled(TargetContainer)`
  justify-content: center;

`

export const TargetDate = styled(Span)`
  color: #3D098A;
  width: 15%;
  text-align: center;
`

export const TargetImportance = styled(Span)`
  width: 15%;
  text-align: center;
`

export const TargetName = styled.div`
  width: 33%;
  text-align: center;
`

export const TargetNameTitle = styled.div`
  width: 33%;
  text-align: center;
`

export const TargetTitle = styled.div`
  width: 15%;
  text-align: center;
`

export const AcceptButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  margin-right: 10%;
`
export const TargetsGradeSummaryWrapper = styled.div`
  border: 2px solid #3D098A;
  margin: 2% 10%;
  text-align: center;
  display: flex;
`

export const GradeTargetElement = styled.div`
  margin: 2% 10%;
  padding: 0;
  border: 2px solid #3D098A;
  border-radius: 5px;
`

export const GradeTargetContainer = styled(TargetContainer)`
  border: none;
`

export const GradeDetailsWrapper = styled.div`
  width: 90%;
  border-top: 2px solid #3D098A;
  padding: 2.5em;
`

export const GradeDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const GradeDetailsContent = styled.div`
  width: 40%;
`

export const GradeForm = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const TargetGrade = styled.div`
//  TODO
`

export const TargetGradeComment = styled.div`
//  TODO
`
