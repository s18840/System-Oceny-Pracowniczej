import React, { useEffect, useState, useContext } from "react";
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
  NavLink,
} from "../../styles/ProfilePageStyle";
import { PageWrapper } from "../../styles/GlobalStyle";
import BasicInformation from "./BasicInformation";
import EmploymentInformation from "./EmploymentInformation";
import EducationInformation from "./EducationInformation";
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
import { Context } from "../../pages/Context";
import axios from "axios";
const activeStyle = {
  color: "#ff4e01",
  borderRadius: "30px 30px 0 0",
  marginBottom: "-5px",
};

function ProfileInfo() {
  const BASIC_INFO = "BASIC_INFO";
  const EMPLOYMENT_INFO = "EMPLOYMENT_INFO";
  const EDUCATION_INFO = "EDUCATION_INFO";
  const [context, setContext] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [contentType, setContentType] = useState(BASIC_INFO);
  const { t } = useTranslation();
  const switchType = (conType) => {
    setContentType(conType);
    //console.log("state change to: " + conType);
  };
  useEffect(() => {
    context &&
      axios
        .get(
          `https://localhost:5001/api/Dto/emp/${localStorage.getItem(
            "employeeId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setEmployee(data);
          setFirstName(data.firstName);
          setSurname(data.lastName);
          setDepartment(data.departmentName);
          //setTeam(data.);
          setPhoneNumber(data.cellPhoneNumber);
          setMail(data.email);
          setStatus(data.status);
          setPersonalNumber(localStorage.getItem("employeeId"));
        });
  }, [context]);
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  const [formDepartment, setDepartment] = useState(" ");
  const [formTeam, setTeam] = useState("PMI");
  const [formPhoneNumber, setPhoneNumber] = useState(" ");
  const [formPersonalNumber, setPersonalNumber] = useState(" ");
  const [formMail, setMail] = useState(" ");
  const [status, setStatus] = useState(" ");
  // useEffect (()=>{
  //   const timer = setTimeout(()=>{
  //     setFirstName(emp.firstName);
  //     setSurname(emp.lastName);
  //     setDepartment(emp.departmentName);
  //     //setTeam(emp.);
  //     setPhoneNumber(emp.cellPhoneNumber);
  //     setMail(emp.email);
  //     setPersonalNumber(empId)
  //   },11);
  //   return () => clearTimeout(timer);
  // },[emp])
  function checkStatus() {
    if (status === 1) {
      return true;
    } else {
      return false;
    }
  }
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
              {formFirstName + " " + formSurname}
            </ProfileHeaderText>
            <ProfileSubHeaderText>
              {t("Department") + ": "}
              <ProfileText>{" " + formDepartment}</ProfileText>
            </ProfileSubHeaderText>
            <ProfileSubHeaderText>
              {t("Team") + ": "}
              <ProfileText>{" " + formTeam}</ProfileText>
            </ProfileSubHeaderText>
          </ProfileTextWrapper>
          <ProfileTextWrapper>
            <ProfileHeaderText>
              <PhoneIcon />
              {formPhoneNumber}
            </ProfileHeaderText>
            <ProfileSubHeaderText>
              {t("Personal number") + ": "}
              <ProfileText>{" " + formPersonalNumber}</ProfileText>
            </ProfileSubHeaderText>
          </ProfileTextWrapper>

          <ProfileTextWrapper>
            <ProfileHeaderText>
              <MailIcon />
              {formMail}
            </ProfileHeaderText>
            <ProfileSubHeaderText>
              {t("Status") + ": "}
              <StatusIcon
                style={
                  status > 0
                    ? { backgroundColor: "#55ff11" }
                    : { backgroundColor: "#ff5511" }
                }
              />
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
