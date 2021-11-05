import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill,BsCircle } from "react-icons/bs";

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
display: flex;
font-size: 24px;
color: #6137a0;
font-weight:bold;
align-items: center;
margin: 15px 0px;

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

export const ProfileTab = styled.div`
  padding: 10px;
  color: #FFFFFF;
  background-color: #6137a0;
  border-radius: 45px;
  margin-top: 10px;
margin-right: 15px;
font-size: 24px;
font-weight:bold;
cursor: pointer;
//styl dla guzik dla wcisnietego, narazie tylko na klik
:active{
  color: #ff4e01;
  border-radius: 30px 30px 0px 0px;
  margin-bottom: -5px;
}
`
export const ProfileTabBar = styled.div`
  display: flex;
  position: fixed;
  margin-top: 5px;
  right: 0;
  left: 400px;
  height: 10px;
  background-color: #6137a0;
`

export const ProfileInfoDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 83px;
margin-left: 400px;

`

export const ProfileTabWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-left: 400px;

`


export const ProfileDetailedInfoWrapper = styled.div`

`
export const ProfileDetailedPersonalInfo = styled.div`  
left: 400 px;
bottom: 30 px;
display: grid; 
grid-auto-columns: 1fr 1fr; 
grid-auto-rows: 1fr; 
grid-template-columns: 1fr 1fr; 
grid-template-rows: 1fr 1fr 1fr; 
gap: 0px 0px; 
border-width:2px;
color: green;
grid-template-areas: 
  ". ."
  ". ."
  ". ."; 
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
export const StatusIcon = styled(BsCircle)`
  overflow: visible;
  background-color: #55FF11;
  //dla statusu nieaktywnego #ff5511
  border-color: black;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 20px;
  border-width: 1px;
`
