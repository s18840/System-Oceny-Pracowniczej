import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill, BsCircle } from "react-icons/bs";

export const ProfilePhoto = styled.div`
  border-radius: 100%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1241f1;
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
  font-size: 24px;
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

export const ProfileTab = styled.div`
  padding: 10px;
  color: #ffffff;
  background-color: #6137a0;
  border-radius: 45px;
  margin-top: 10px;
  margin-right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  //styl dla guzik dla wcisnietego, narazie tylko na klik
  :active {
    color: #ff4e01;
    border-radius: 30px 30px 0px 0px;
    margin-bottom: -5px;
  }
`;
export const ProfileTabBar = styled.div`
  display: flex;
  position: fixed;
  margin-top: 5px;
  right: 0;
  left: 400px;
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
  display: grid;
  right: 0;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr 0.25fr;
  color: blue;
`;
export const ProfileDateText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;
export const FirstName = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-size: 24px;
  font-style:italic;
`;
export const SecondName = styled.div`
  grid-row: 2;
  grid-column: 1;
  font-size: 24px;
  font-style:italic;
`;
export const SurName = styled.div`
  grid-row: 3;
  grid-column: 1;
  font-size: 24px;
  font-style:italic;
`;
export const FamilyName = styled.div`
  grid-row: 4;
  grid-column: 1;
  font-size: 24px;
  font-style:italic;
`;
export const DateOfBirth = styled.div`
  grid-row: 5;
  grid-column: 1;
  font-size: 24px;
  font-style:italic;
`;
export const Street = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 24px;
  font-style:italic;
`;
export const HouseNumber = styled.div`
  grid-row: 2;
  grid-column: 3;
  font-size: 24px;
  font-style:italic;
`;
export const City = styled.div`
  grid-row: 3;
  grid-column: 2;
  font-size: 24px;
  font-style:italic;
`;
export const District = styled.div`
  grid-row: 3;
  grid-column: 3;
  font-size: 24px;
  font-style:italic;
`;
export const PostalCode = styled.div`
  grid-row: 4;
  grid-column: 2;
  font-size: 24px;
  font-style:italic;
`;
export const Country = styled.div`
  grid-row: 4;
  grid-column: 3;
  font-size: 24px;
  font-style:italic;
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
