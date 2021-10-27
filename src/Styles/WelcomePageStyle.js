import styled from 'styled-components'
import { FiMail } from 'react-icons/fi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import backgroundImage from '../assets/img/InterfaceMainPage.png'

export const WelcomeTopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 150px;
  padding-top: 70px;
  background-color: #f9ebf6;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const WelcomeNavButton = styled(Link)`
  width: 248px;
  height: 83px;
  line-height: 83px;
  color: #ff4e01;
  background-color: #fff3fd;
  border: 3px solid #feffff;
  border-radius: 40px;
  font-size: 39px;
  margin-left: 50px;
  text-align: center;
`

export const WelcomeNav = styled.li`
  display: flex;
  justify-content: flex-end;
  max-height: 100px;
`

export const WelcomeTextWrapper = styled.div`
  margin-right: 20px;
  text-align: right;
  font-style: medium;
  line-height: 1.8em;
  font-size: 56px;
  filter: drop-shadow(-14px 31px 13px #000000);
  color: #ffffff;
`
export const InlineWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 150px;
  margin-right: 40px;
`

export const GradeWrapper = styled.div`
  padding-top: 50px;
  padding-right: 100px;
`

export const AboutInfoWrapper = styled.div`
  background-color: #ffffff;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  width: 50%;
  padding: 50px;
  padding-left: 100px;
  font-size: 40px;
  filter: drop-shadow(-23px 23px 16px #000000);
  color: #3d098a;
`

export const WelcomePageContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
`

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: right;
  background-color: #3d098a;
  min-height: 800px;
  width: 50%;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  filter: drop-shadow(22px 23px 16px #000000);
  justify-content: space-evenly;
  padding-left: 100px;
  padding-right: 100px;
`

export const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 100px;
  margin-left: 50px;
`

export const ContactInfoWrapper = styled.div`
  display: flex;
  vertical-align: middle;
`
export const Contact = styled.a`
  padding: 40px;
  color: #6137a0;
  font-size: 56px;
`

export const MailIcon = styled(FiMail)`
  overflow: visible;
  background-color: #ff4e01;
  color: white;
  border-radius: 50%;
  padding: 5px;
  transform: scale(5);
  margin: 60px;
`

export const PhoneIcon = styled(BsFillTelephoneFill)`
  overflow: visible;
  background-color: #ff4e01;
  color: white;
  border-radius: 50%;
  padding: 5px;
  transform: scale(5);
  margin: 60px;
`

export const HomeDiv = styled.div`
  text-align: center;
  color: #ff4e01;
  font-size: 25px;
  padding-bottom: 10px;
`

export const Footer = styled.footer`
  background-color: #3d098a;
  width: 100%;
  height: 40px;
`
