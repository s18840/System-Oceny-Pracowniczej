import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
  MailIcon,
  NavLink,
  PhoneIcon,
  ProfileDetailedInfoWrapper,
  ProfileDetailedPersonalInfo,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfilePhoto,
  ProfileSubHeaderText,
  ProfileTab,
  ProfileTabBar,
  ProfileTabWrapper,
  ProfileText,
  ProfileTextWrapper,
ProfileWrapper,
StatusIcon
} from "../styles/ProfilePageStyle"

function App() {
  return (
    <Router>
      <NavBar />
      <Header /> 
      <Footer />

      <ProfileInfoDiv>
    <ProfilePhoto>
      <NavLink to ="/profile">

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
      <PhoneIcon/>
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
      <MailIcon/>
      <text>a.jarzab@gmail.com</text>
      </ProfileHeaderText>
    <ProfileSubHeaderText>
      <text>Status:</text>
      <StatusIcon/>
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
<ProfileTabBar/>
<ProfileDetailedInfoWrapper>
  <ProfileDetailedPersonalInfo>
    
  </ProfileDetailedPersonalInfo>
</ProfileDetailedInfoWrapper>

    </Router>
  );
}

export default App;
