import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FiMail} from "react-icons/fi";
import {BsCircle, BsFillTelephoneFill} from "react-icons/bs";

export const ProfilePhoto = styled.div`
  border-radius: 100%;
`;


export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileHeaderText = styled.text`
  display: flex;
  font-size: 28px;
  color: #6137a0;
  font-weight: bold;
  align-items: center;
  margin: 15px 0px;
`;
export const ProfileSubHeaderText = styled.text`
  font-size: 14px;
  color: #6137a0;
  font-weight: bold;
  margin: 15px 0px;
`;
export const ProfileText = styled.text`
  font-size: 14px;
  color: #111111;
  font-weight: bold;
  margin: 15px 0px;
`;

export const ProfileTab = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #6137a0;
  border-radius: 45px;
  border-bottom: 0;
  margin-top: 10px;
  margin-right: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;
export const ProfileTabBar = styled.div`
  display: flex;
  margin-top: 5px;
  right: 0;
  height: 10px;
  background-color: #6137a0;
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const NavLink= styled(Link)`

`

export const ProfileTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
`;

export const ProfileDetailedInfoWrapper = styled.div`
  border: 2px solid #dfdfdf;
  margin:10px 10px 10px 10px;
  border-radius: 20px ;
  display: grid;
  justify-content: space-evenly;
  row-gap: 2px;
  grid-template-columns: 280px 200px 200px;
  grid-template-rows: 50px 70px 70px 70px 70px 70px 70px 70px;
  color: blue;
`;
export const ProfileDataText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;
export const PersonalDataHeadingText = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-size: 36px;
  font-weight: bold;
  color: purple;
`;
export const AddressHeadingText = styled.div`
  grid-row: 3;
  grid-column: 2;
  font-size: 36px;
  font-weight: bold;
  color: purple;
`;
export const FirstName = styled.div`
  grid-row: 2;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const SecondName = styled.div`
  grid-row: 3;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const SurName = styled.div`
  grid-row: 4;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const FamilyName = styled.div`
  grid-row: 5;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const DateOfBirth = styled.div`
  grid-row: 6;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const Street = styled.div`
  grid-row: 4;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const HouseNumber = styled.div`
  grid-row: 4;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const City = styled.div`
  grid-row: 5;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const District = styled.div`
  grid-row: 5;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const PostalCode = styled.div`
  grid-row: 6;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const Country = styled.div`
  grid-row: 6;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const Mail = styled.div`
  grid-row: 8;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const PhoneNumber = styled.div`
  grid-row: 7;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
`;
export const FormButton = styled.button`
  grid-row: 1;
  grid-column: 3;
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;
export const AcceptButton = styled.button`
  grid-row: 1;
  grid-column: 3;
  margin-left:230px ;
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;

export const TableInfo = styled.table`
  border: 2px solid #dfdfdf;
  margin:10px 10px 10px 10px;
  border-radius: 20px ;
  flex-direction: column;
  width:100% ;
  display: table;
  padding: 30px ;
  font-size: 42px;
  font-weight: bold;
  color: #522d8a;
  text-align: center;
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const EmploymentTableDateLine = styled.div`
  width: 110px;
  height: 2px;
  border-top: 2px solid #111111;
`;
export const TableDetailsDate = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #ff4e01;
`;
export const EmploymentDetailed = styled.td`
  justify-content: center;
`;
export const EmploymentDate = styled.div`
  font-size: 28px;
  color: purple;
`;
export const EmploymentDep = styled.div`
  font-size: 28px;
  color: purple;
`;
export const EmploymentJob = styled.div`
  font-size: 28px;
  color: purple;
`;
export const EmploymentTeam = styled.div`
  font-size: 28px;
  color: purple;
`;

export const Row = styled.tr`
  border: 1px solid #dfdfdf !important;
  border-radius: 20px;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px #666;
`;

export const MailIcon = styled(FiMail)`
  overflow: visible;
  background-color: #ff4e01;
  color: white;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 20px;
  padding: 5px;
  transform: scale(1.5);
`;
export const PhoneIcon = styled(BsFillTelephoneFill)`
  overflow: visible;
  background-color: #ff4e01;
  color: white;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 20px;
  padding: 5px;
  transform: scale(1.5);
`;
export const StatusIcon = styled(BsCircle)`
  overflow: visible;
  background-color: #55ff11;
  //dla statusu nieaktywnego #ff5511
  border-color: black;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 20px;
  border-width: 1px;
`;
