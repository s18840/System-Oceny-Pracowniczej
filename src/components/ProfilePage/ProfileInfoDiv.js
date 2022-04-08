import React, { useState } from "react";
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
  NavLink
} from "../../styles/ProfilePageStyle";
import { PageWrapper } from "../../styles/GlobalStyle";
import BasicInformation from "./BasicInformation";
import EmploymentInformation from "./EmploymentInformation";
import EducationInformation from "./EducationInformation";
import BasicInformationForm from "./BasicInformationForm";
const activeStyle = {
  color: "#ff4e01",
  borderRadius: "30px 30px 0 0",
  marginBottom: "-5px",
};
const dataJson = {
  titles: [
    "Name",
    "Surname",
    "Department",
    "Job",
    "PhoneNumber",
    "PersonalNumber",
    "Mail",
  ],
  content: [
    {
      Name: "Amadeusz",
      Surname: "Jarząbkowski",
      Department: "IT",
      Job: "Junior Java Developer",
      PhoneNumber: "+48 506123412",
      PersonalNumber: "172",
      Mail: "a.jarzab@gmail.com",
    },
  ],
};

function ProfileInfo() {
  const BASIC_INFO = "BASIC_INFO";
  const EMPLOYMENT_INFO = "EMPLOYMENT_INFO";
  const EDUCATION_INFO = "EDUCATION_INFO";
  const BASIC_INFO_EDIT = "BASIC_INFO_EDIT";

  const [contentType, setContentType] = useState(BASIC_INFO);

  const switchType = (conType) => {
    setContentType(conType);
    console.log("state change to: " + conType);
  };

  return (
    <PageWrapper>
      <>
        {dataJson.content.map((content) => (
          <ProfileInfoDiv>
            <ProfilePhoto>
              <NavLink to="/profile">
                <img src="prof.png" alt="" width="100%" />
              </NavLink>
            </ProfilePhoto>
            <ProfileTextWrapper>
              <ProfileHeaderText>
                {content.Name + " " + content.Surname}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                Department:
                <ProfileText>
                  {" " + content.Department}
                </ProfileText>
              </ProfileSubHeaderText>
              <ProfileSubHeaderText>
                Job:
                <ProfileText>
                 {" " + content.Job}
                </ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>

            <ProfileTextWrapper>
              <ProfileHeaderText>
                <PhoneIcon />
                {content.PhoneNumber}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                Personal Number:
                <ProfileText>
                  {" " + content.PersonalNumber}
                </ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>

            <ProfileTextWrapper>
              <ProfileHeaderText>
                <MailIcon />
                {content.Mail}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                Status:
                <StatusIcon />
              </ProfileSubHeaderText>
            </ProfileTextWrapper>
          </ProfileInfoDiv>
        ))}
      </>
      <ProfileTabWrapper>
        <ProfileTab
          onClick={() => switchType(BASIC_INFO)}
          style={contentType === BASIC_INFO ? activeStyle : {}}
        >
          Basic Information
        </ProfileTab>
        <ProfileTab
          onClick={() => switchType(EMPLOYMENT_INFO)}
          style={contentType === EMPLOYMENT_INFO ? activeStyle : {}}
        >
          Employment
        </ProfileTab>
        <ProfileTab
          onClick={() => switchType(EDUCATION_INFO)}
          style={contentType === EDUCATION_INFO ? activeStyle : {}}
        >
          Education
        </ProfileTab>
      </ProfileTabWrapper>
      <ProfileTabBar />
      <div>
        {(() => {
          switch (contentType) {
            case BASIC_INFO:
              return <BasicInformation />;
            case EMPLOYMENT_INFO:
              return <EmploymentInformation />;
            case EDUCATION_INFO:
              return <EducationInformation />;
            case BASIC_INFO_EDIT:
              return <BasicInformationForm />;
          }
        })()}
      </div>
    </PageWrapper>
  );
}
export default ProfileInfo;
