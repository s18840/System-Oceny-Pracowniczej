import styled from "styled-components";
import {
  GlobalButton,
  InputField,
  OrangeInputButton,
  TextField,
} from './GlobalStyle';
import {GoCalendar, ImPlus} from 'react-icons/all';

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

export const CalendarIcon = styled(GoCalendar)`
  overflow: visible;
  color:  #ff4e01;
  transform: scale(5);
  margin: 60px;
`

export const PlusIcon = styled(ImPlus)`
  color:  #ff4e01;
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
  padding: 2.5em;
  align-content: space-around;
`

export const AddTargetContainer = styled(TargetContainer)`
  justify-content: center;
  
`
