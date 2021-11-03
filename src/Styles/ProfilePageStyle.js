import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

export const ProfilePhoto = styled.div`

border-radius: 100%;

`

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1241f1;
  }
`
export const ProfileTextWrapper = styled.div`
display: flex;
flex-direction: column;

`

export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;

`

export const ProfileHeaderText = styled.text`
font-size: 24px;
color: #6137a0;
font-weight:bold;
`
export const ProfileSubHeaderText = styled.text`
font-size: 14px;
color: #6137a0;
font-weight:bold;
margin: 15px 0px;
`
export const ProfileText = styled.text`
font-size: 14px;
color: #111111;
font-weight:bold;
margin: 15px 0px;
`

export const ProfileInfoDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 83px;
margin-left: 400px;
`

export const ProfileTabDiv = styled.div`

`

export const ProfileDetailedInfoDiv = styled.div`

`
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