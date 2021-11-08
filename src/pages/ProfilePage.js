import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
  City,
  Country,
  DateOfBirth,
  District,
  FamilyName,
  FirstName,
  HouseNumber,
  MailIcon,
  NavLink,
  PhoneIcon,
  PostalCode,
  ProfileDateText,
  ProfileDetailedInfoWrapper,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfilePhoto,
  ProfileSubHeaderText,
  ProfileTab,
  ProfileTabBar,
  ProfileTabWrapper,
  ProfileText,
  ProfileTextWrapper,
  SecondName,
  StatusIcon,
  Street,
  SurName,
} from "../styles/ProfilePageStyle";

function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
      <Footer/>

      <ProfileInfoDiv>
        <ProfilePhoto>
          <NavLink to="/profile">
            <img src="prof.png" alt="" width="100%" />
          </NavLink>
        </ProfilePhoto>
        <ProfileTextWrapper>
          <ProfileHeaderText>
            <text>Amadeusz Jarząbkowski</text>
          </ProfileHeaderText>
          <ProfileSubHeaderText>
            <text>Department:</text>
            <ProfileText>
              <text> IT</text>
            </ProfileText>
          </ProfileSubHeaderText>
          <ProfileSubHeaderText>
            <text>Job:</text>
            <ProfileText>
              <text> Junior Java Developer</text>
            </ProfileText>
          </ProfileSubHeaderText>
        </ProfileTextWrapper>

        <ProfileTextWrapper>
          <ProfileHeaderText>
            <PhoneIcon />
            <text>+48 506123412</text>
          </ProfileHeaderText>
          <ProfileSubHeaderText>
            <text>Personal Number:</text>
            <ProfileText>
              <text> 172</text>
            </ProfileText>
          </ProfileSubHeaderText>
        </ProfileTextWrapper>

        <ProfileTextWrapper>
          <ProfileHeaderText>
            <MailIcon />
            <text>a.jarzab@gmail.com</text>
          </ProfileHeaderText>
          <ProfileSubHeaderText>
            <text>Status:</text>
            <StatusIcon />
          </ProfileSubHeaderText>
        </ProfileTextWrapper>
      </ProfileInfoDiv>

      <ProfileTabWrapper>
        <ProfileTab>
          <text>Basic Inforamtion</text>
        </ProfileTab>
        <ProfileTab>
          <text>Employment</text>
        </ProfileTab>
        <ProfileTab>
          <text>Education</text>
        </ProfileTab>
      </ProfileTabWrapper>
      <ProfileTabBar />

      <ProfileDetailedInfoWrapper>
        <FirstName>
          <ProfileDateText>First name:</ProfileDateText>Andrzej
        </FirstName>
        <SecondName>
          <ProfileDateText>Second name:</ProfileDateText>Kowalski
        </SecondName>
        <SurName>
          <ProfileDateText>Surname:</ProfileDateText>Jarząbkowski
        </SurName>
        <FamilyName>
          <ProfileDateText>Family name:</ProfileDateText>-
        </FamilyName>
        <DateOfBirth>
          <ProfileDateText>Date of birth:</ProfileDateText>24.12.1998
        </DateOfBirth>
        <Street>
          <ProfileDateText>Street:</ProfileDateText>Akacjowa
        </Street>
        <HouseNumber>
          <ProfileDateText>HouseNumber:</ProfileDateText>12
        </HouseNumber>
        <City>
          <ProfileDateText>City:</ProfileDateText>Warszawa
        </City>
        <District>
          <ProfileDateText>District:</ProfileDateText>Mazowieckie
        </District>
        <PostalCode>
          <ProfileDateText>Postal code:</ProfileDateText>01-100
        </PostalCode>
        <Country>
          <ProfileDateText>Country:</ProfileDateText>Poland
        </Country>
      </ProfileDetailedInfoWrapper>
    </Router>
  );
}

export default App;
