import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill, BsCircle } from "react-icons/bs";

export const ProfilePhoto = styled.div`
  border-radius: 100%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  &.active {
    color: #ff4e01;
  }
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
  //styl dla guzik dla wcisnietego, narazie tylko na klik
  :active {
    border-radius: 30px 30px 0px 0px;
    margin-bottom: -5px;
  }
`;
export const ProfileTabBar = styled.div`
  display: flex;
  margin-top: 5px;
  right: 0;
  margin-left: 380px;
  height: 10px;
  background-color: #6137a0;
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 83px;
  margin-left: 400px;
`;

export const ProfileTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 400px;
`;

export const ProfileDetailedInfoWrapper = styled.div`
  border: 2px solid #dfdfdf;
  margin-left: 400px;
  display: grid;
  justify-content: space-evenly;
  margin-top: 5px;
  row-gap: 0px;
  grid-template-columns: 280px 200px 200px;
  grid-template-rows: 80px 80px 80px 80px 80px 80px;
  color: blue;
`;
export const ProfileDataText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: purple;
`;
export const PersonalDataHeadingText = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-size: 42px;
  font-weight: bold;
  color: purple;
`;
export const AddressHeadingText = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 42px;
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
  grid-row: 3;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const HouseNumber = styled.div`
  grid-row: 3;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const City = styled.div`
  grid-row: 4;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const District = styled.div`
  grid-row: 4;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const PostalCode = styled.div`
  grid-row: 5;
  grid-column: 2;
  font-size: 28px;
  font-style: italic;
`;
export const Country = styled.div`
  grid-row: 5;
  grid-column: 3;
  font-size: 28px;
  font-style: italic;
`;
export const EmploymentTableInfo = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: 400px;
  font-size: 42px;
  font-weight: bold;
  color: #522d8a;
  border: 2px solid #dfdfdf;
  border-radius: 20px;
  justify-content: center;
`;
export const EmploymentTableDateLine = styled.div`
  height: 1px;
  max-width: 50%;
  background-color: #707070;
`;
export const EmploymentTableDetailsDate = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #ff4e01;
`;
//ten div ma byc w kazdej tabeli jako ramka do kazdego TR
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
