import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
  MailIcon,
  PhoneIcon,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfilePhoto,
  ProfileSubHeaderText,
  ProfileText,
  ProfileTextWrapper,
ProfileWrapper
} from "../styles/ProfilePageStyle"

function App() {
  return (
    <Router>

      <NavBar />


      <Header /> 
      <Footer />
      <ProfileInfoDiv>
    <ProfilePhoto>
    <img src="prof.png" alt="" width="100%" />
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
      <PhoneIcon/>
      <text>+48 506 123 412</text>
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
      <MailIcon/>
      <text>a.jarzab@gmail.com</text>
      </ProfileHeaderText>
    <ProfileSubHeaderText>
      <text>Status:</text>
      <ProfileText>
        <text> DODAC KOLOR</text>
      </ProfileText>
      </ProfileSubHeaderText> 
    </ProfileTextWrapper>
    
    </ProfileInfoDiv>

    </Router>
  );
}

export default App;
