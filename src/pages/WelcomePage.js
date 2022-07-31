import React from "react";
import {Link} from "react-scroll";
import logo from "../assets/img/feeDBack_logo.png";
import grade_1 from "../assets/img/Grade_A+.png";
import grade_2 from "../assets/img/Grade_C.png";
import grade_3 from "../assets/img/Grade_B.png";
import about_img from "../assets/img/about_img.png";
import about_img2 from "../assets/img/about_img2.png";
import LoginForm from "../components/WelcomePage/LoginForm";
import WelcomeNav from "../components/WelcomePage/WelcomeNav";
import ContactInfo from "../components/WelcomePage/ContactInfo";
import {HighlightText, Title} from "../styles/GlobalStyle";
import {
  AboutInfoWrapper,
  AboutWrapper,
  ConctactContentWrapper, ContactRightSide,
  Footer,
  GradeWrapper,
  HomeDiv, ImageStack,
  InlineWrapper,
  Logo,
  WelcomeTextWrapper,
  WelcomeTopWrapper,
  MailIcon,
  PhoneIcon,
  ContactInfoWrapper,
  Contact,
} from "../styles/WelcomePageStyle";

function WelcomePage() {

  return (
    <>
      <WelcomeTopWrapper id="top">
        <Logo src={logo} alt=""/>
        <InlineWrapper>
          <WelcomeNav/>
          <WelcomeTextWrapper>
            The platform your employee need <br/>
            for a better <HighlightText>growth</HighlightText>
          </WelcomeTextWrapper>
        </InlineWrapper>
        <GradeWrapper>
          <img src={grade_1} alt=""/>
          <img src={grade_2} alt=""/>
          <img src={grade_3} alt=""/>
        </GradeWrapper>
        <LoginForm/>
      </WelcomeTopWrapper>
      <AboutWrapper>
        <ContactRightSide>
          <Title id="About" marginLeft="150px">
            About
          </Title>
          <AboutInfoWrapper>
            <p>
          In current world employee is the most important, it is the basis of the company and allows it to achieve profit.
          In order to ensure development, the company must first of all ensure the employee's development - these are things that are closely related to each other.
            </p>
            <p>
          FeeDBack enables and supports companies in assessing employees according to their competences.
          Additionally, it is an easy-to-use tool for storing and processing employees personal data.
          FeeDBack supports Human Resources department in quaterly grading.
          You can be sure that after each team work you will be graded - system automaticly will generate feedback request.
            </p>
            <p style={{fontWeight: "bold"}}>
          Does it sound equal? With FeeDBack it does!
            </p>
          </AboutInfoWrapper>
        </ContactRightSide>
        <ImageStack>
          <img src={about_img} alt=""/>
          <img src={about_img2} alt=""/>
        </ImageStack>
      </AboutWrapper>
      <ConctactContentWrapper>
        <ContactInfo/>
        <ContactRightSide>
          <Title id="Contact" textAligment="right" marginRight="150px">
            Contact
          </Title>
          <ContactInfoWrapper>
            <MailIcon />
            <Contact>mail@support.com</Contact>
          </ContactInfoWrapper>
          <ContactInfoWrapper>
            <PhoneIcon />
            <Contact>504123323</Contact>
          </ContactInfoWrapper>
        </ContactRightSide>
      </ConctactContentWrapper>
      <HomeDiv>
        <Link smooth spy to="top">
          Home
        </Link>
      </HomeDiv>
      <Footer/>
    </>
  );
}

export default WelcomePage;
