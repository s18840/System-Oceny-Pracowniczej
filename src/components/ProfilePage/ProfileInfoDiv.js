import React from "react";
import {
  MailIcon,
  NavLink,
  PhoneIcon,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfilePhoto,
  ProfileSubHeaderText,
  ProfileText,
  ProfileTextWrapper,
  StatusIcon,
  ProfileTabWrapper,
  ProfileTab,
  ProfileTabBar
} from "../../styles/ProfilePageStyle";
const ProfileInfo = () => (
  <>
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
    </>
  
);
export default ProfileInfo;
