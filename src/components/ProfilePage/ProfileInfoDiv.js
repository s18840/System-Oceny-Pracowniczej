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
import { useTranslation } from "react-i18next";
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

  const [contentType, setContentType] = useState(BASIC_INFO);
  const { t } = useTranslation();
  const switchType = (conType) => {
    setContentType(conType);
    console.log("state change to: " + conType);
  };

  const [profileData, setProfileData] = useState({
    Name: dataJson.content[0].Name,
    Surname: dataJson.content[0].Surname,
    Department: dataJson.content[0].Department,
    Job: dataJson.content[0].Job,
    PhoneNumber: dataJson.content[0].PhoneNumber,
    PersonalNumber: dataJson.content[0].PersonalNumber,
    Mail: dataJson.content[0].Mail,
  })

  return (
    <PageWrapper>
      <>
          <ProfileInfoDiv>
            <ProfilePhoto>
              <NavLink to="/profile">
                <img src="prof.png" alt="" width="100%" />
              </NavLink>
            </ProfilePhoto>
            <ProfileTextWrapper>
              <ProfileHeaderText>
                {profileData.Name + " " + profileData.Surname}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
              {t("Department")+": "}
                <ProfileText>
                  {" " + profileData.Department}
                </ProfileText>
              </ProfileSubHeaderText>
              <ProfileSubHeaderText>
              {t("Job")+": "}
                <ProfileText>
                 {" " + profileData.Job}
                </ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>
            <ProfileTextWrapper>
              <ProfileHeaderText>
                <PhoneIcon />
                {profileData.PhoneNumber}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
              {t("Personal number")+": "}
                <ProfileText>
                  {" " + profileData.PersonalNumber}
                </ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>

            <ProfileTextWrapper>
              <ProfileHeaderText>
                <MailIcon />
                {profileData.Mail}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
              {t("Status")+": "}
                <StatusIcon />
              </ProfileSubHeaderText>
            </ProfileTextWrapper>
          </ProfileInfoDiv>
      </>
      <ProfileTabWrapper>
        <ProfileTab
          onClick={() => switchType(BASIC_INFO)}
          style={contentType === BASIC_INFO ? activeStyle : {}}
        >
          {t("Basic Information")}
        </ProfileTab>
        <ProfileTab
          onClick={() => switchType(EMPLOYMENT_INFO)}
          style={contentType === EMPLOYMENT_INFO ? activeStyle : {}}
        >
          {t("Employment")}
        </ProfileTab>
        <ProfileTab
          onClick={() => switchType(EDUCATION_INFO)}
          style={contentType === EDUCATION_INFO ? activeStyle : {}}
        >
          {t("Education")}
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
          }
        })()}
      </div>
    </PageWrapper>
  );
}
export default ProfileInfo;
