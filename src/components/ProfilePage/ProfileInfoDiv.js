import React, {useState} from "react";

import {
  MailIcon,
  PhoneIcon,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfilePhoto,
  ProfileSubHeaderText,
  ProfileTab,
  ProfileTabBar,
  ProfileTabWrapper,
  ProfileText,
  ProfileTextWrapper,
  StatusIcon,
} from "../../styles/ProfilePageStyle";
import {PageWrapper} from "../../styles/GlobalStyle";
import BasicInformation from "./BasicInformation";
import EmploymentInformation from "./EmploymentInformation";
import EducationInformation from "./EducationInformation";

const activeStyle = {
  color: "#ff4e01",
  borderRadius: "30px 30px 0 0",
  marginBottom: "-5px"
}

function ProfileInfo() {
  const BASIC_INFO = "BASIC_INFO"
  const EMPLOYMENT_INFO = "EMPLOYMENT_INFO"
  const EDUCATION_INFO = "EDUCATION_INFO"

  const [contentType, setContentType] = useState(BASIC_INFO)

  const switchType = (conType) => {
    setContentType(conType)
    console.log("state change to: " + conType)
  }

  return (
    <PageWrapper>
      <ProfileInfoDiv>
        <ProfilePhoto>
          <img src="prof.png" alt="" width="100%"/>
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
        <ProfileTab onClick={() => switchType(BASIC_INFO)} style={contentType === BASIC_INFO ? activeStyle : {}}>
          <text>Basic Inforamtion</text>
        </ProfileTab>
        <ProfileTab onClick={() => switchType(EMPLOYMENT_INFO)} style={contentType === EMPLOYMENT_INFO ? activeStyle : {}}>
          <text>Employment</text>
        </ProfileTab>
        <ProfileTab onClick={() => switchType(EDUCATION_INFO)} style={contentType === EDUCATION_INFO ? activeStyle : {}}>
          <text>Education</text>
        </ProfileTab>
      </ProfileTabWrapper>
      <ProfileTabBar/>
      <div>
        {(() => {
          switch (contentType) {
            case BASIC_INFO:   return <BasicInformation/>;
            case EMPLOYMENT_INFO: return <EmploymentInformation/>;
            case EDUCATION_INFO:  return <EducationInformation/>;
          }
        })()}
      </div>
    </PageWrapper>
  )
}
export default ProfileInfo;
