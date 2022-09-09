import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FiMail} from "react-icons/fi";
import {BsCircle, BsFillTelephoneFill} from "react-icons/bs";

export const ProfileAvatar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  font-size: 100px;
  color: #FFFFFF;
  margin-right: 10px;
  line-height: 50px;
  text-align: center;
  background: #FFA500;
  text-decoration: none ;
  `
export const ProfileAvatarDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 170px;
height: 170px;
border-radius: 50%;
font-size: 100px;
color: #FFFFFF;
margin-right: 10px;
line-height: 50px;
text-align: center;
background: #FFA500;
text-decoration: none ;
`


export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileHeaderText = styled.div`
  display: flex;
  font-size: 28px;
  color: #6137a0;
  font-weight: bold;
  align-items: center;
  margin: 15px 0px;
`;
export const ProfileSubHeaderText = styled.div`
  font-size: 14px;
  color: #6137a0;
  font-weight: bold;
  margin: 15px 0px;
`;
export const ProfileText = styled.div`
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
  border: 0;
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
  margin-left: 10px;
`;

export const ProfileDetailedInfoWrapper = styled.div`
padding-bottom: 5px ;
  border: 2px solid #dfdfdf;
  margin:10px 10px 10px 10px;
  border-radius: 20px ;
  display: grid;
  justify-content: space-evenly;
  row-gap: 1px;
  grid-template-columns: 280px 200px 220px;
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
  grid-row: 5;
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
  grid-row: 5;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const City = styled.div`
  grid-row: 4;
  grid-column: 3;
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
export const CompanyMail = styled.div`
  grid-row: 7;
  grid-column: 1;
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
  grid-row: 6;
  grid-column: 1;
  font-size: 28px;
  font-style: italic;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const FormButton = styled.button`
  grid-row: 1;
  grid-column: 3;
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;
export const AddButton = styled.input`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;
export const ModalLink = styled(Link)`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  text-decoration: none;
`;
export const ModalButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;
export const ModalInput = styled.input`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
`;

export const ModalOpenButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
  position: fixed;
  right: 20px;
  margin-top: 30px ;
`;

export const ModalCompetencesOpenButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: #FF4E01;
  color: white;
  border-radius: 45px;
  border: 0;
  font-size: 28px;
  font-family: 'Ubuntu';
  justify-self: center;
  align-self: center;
  margin-left: 40px ;
`;
export const ModalTitleDiv = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: purple;
  font-family: 'Ubuntu';
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
  width:98.7% ;
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
  border-color: black;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 20px;
  border-width: 1px;
`;

export const SelectJobs = styled.select`
  font-size: 30px;
  line-height: 40px;
  border-radius: 44px;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  padding-left: 20px;
`;

export const OptionJobs = styled.option`
  font-size: 30px;
  line-height: 40px;
  border-radius: "30px 30px 0 0";
  border: 2px solid #cccccc;
  box-sizing: border-box;
  padding-left: 20px;
`;
