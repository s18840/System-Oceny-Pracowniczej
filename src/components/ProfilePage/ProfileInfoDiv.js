import React, { useEffect, useState, useContext } from "react";
import {
  MailIcon,
  PhoneIcon,
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfileSubHeaderText,
  ProfileTab,
  ProfileTabBar,
  ProfileTabWrapper,
  ProfileText,
  ProfileTextWrapper,
  StatusIcon,
  ProfileAvatar,
  FormButton,
  ProfileAvatarDiv
} from "../../styles/ProfilePageStyle";
import { PageWrapper } from "../../styles/GlobalStyle";
import BasicInformation from "./BasicInformation";
import EmploymentInformation from "./EmploymentInformation";
import EducationInformation from "./EducationInformation";
import { Context } from "../../pages/Context";
import axios from "axios";
import ModalLogin from "../ModalLogin";
import {useHistory, useLocation} from "react-router-dom";
import { log } from "loglevel";
const activeStyle = {
  color: "#ff4e01",
  borderRadius: "30px 30px 0 0",
  marginBottom: "-5px",
};

function ProfileInfo(props) {
  const BASIC_INFO = "BASIC_INFO";
  const EMPLOYMENT_INFO = "EMPLOYMENT_INFO";
  const EDUCATION_INFO = "EDUCATION_INFO";
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [contentType, setContentType] = useState(BASIC_INFO);
  const switchType = (conType) => {
    setContentType(conType);
  };
  useEffect(() => {
    setLoading(true);
    context &&
      axios
        .get(
          `${process.env.REACT_APP_API_ADDRESS}Dto/emp/${props.id ? props.id : localStorage.getItem(
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
          setDepartment(data.departmentName ? data.departmentName : "Not Assigned");
          setTeam(data.teamName);
          setPhoneNumber(data.cellPhoneNumber);
          setMail(data.companyEmail);
          setStatus(data.status);
          setPersonalNumber(props.id? props.id : localStorage.getItem("employeeId"));
          setLoading(false);
        }).catch(err => log.warn(err));
  }, [context, props.id]);

  const [teamIds, setTeamIds] = useState([])
  useEffect(()=>{
    if((localStorage.getItem("roles").includes("Manager"))){
      context &&
      axios
        .get(
          `${process.env.REACT_APP_API_ADDRESS}Employee/teammembers/${localStorage.getItem("employeeId")}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({data}) => {
          let teamEmpIds = data.map((value) => value.personalNumber)
          setTeamIds(teamEmpIds)
        }).catch(err => log.warn(err));
    }
  }, [context])
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  const [formDepartment, setDepartment] = useState(" ");
  const [formTeam, setTeam] = useState("PMI");
  const [formPhoneNumber, setPhoneNumber] = useState(" ");
  const [formPersonalNumber, setPersonalNumber] = useState(" ");
  const [formMail, setMail] = useState(" ");
  const [status, setStatus] = useState(" ");
  const initials = (formFirstName[0]) + (formSurname[0]);
  const [openModal,setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory()
  useEffect (()=>{
    setOpenModal(status == 0);
  },[status])

  const prepareUserId = () =>{
    const userId = {
      employeeId: props.id ? props.id : localStorage.getItem("employeeId")
    }
    return userId;
  }

  const resetPassword = () => {
    const userId =prepareUserId();
    axios.put(`${process.env.REACT_APP_API_ADDRESS}Account/passwordreset`, userId,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch(err => log.warn(err));
  }

  if(loading){
    return(<></>)
  }
  return (
    <>
      <PageWrapper>
        <>
          <ProfileInfoDiv>
            {!props.id && <ProfileAvatar to="/profile">
              {initials}
            </ProfileAvatar>}
            {props.id && <ProfileAvatarDiv>
              {initials}
            </ProfileAvatarDiv>}
            <ProfileTextWrapper>
              <ProfileHeaderText>
                {formFirstName + " " + formSurname}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                {"Department" + ": "}
                <ProfileText>{" " + formDepartment}</ProfileText>
              </ProfileSubHeaderText>
              <ProfileSubHeaderText>
                {"Team" + ": "}
                <ProfileText>{" " + formTeam}</ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>
            <ProfileTextWrapper>
              <ProfileHeaderText>
                <PhoneIcon />
                {formPhoneNumber}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                {"Personal number" + ": "}
                <ProfileText>{" " + formPersonalNumber}</ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>

            <ProfileTextWrapper>
              <ProfileHeaderText>
                <MailIcon />
                {formMail}
              </ProfileHeaderText>
              <ProfileSubHeaderText>
                {"Status" + ": "}
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
          {((localStorage.getItem("roles").includes("HR") && (props.id && props.id !== localStorage.getItem("employeeId"))) ||
              (localStorage.getItem("roles").includes("Admin") && (props.id && props.id !== localStorage.getItem("employeeId"))) ||
              ((localStorage.getItem("roles").includes("Manager") && teamIds.includes(parseInt(props.id))))) &&
            <FormButton onClick={()=>history.push(`/grades/${props.id}`)} style={{width: "200px", position: "absolute", marginTop: "10px", right: "300px"}} >
            Grades
            </FormButton>}
          {(localStorage.getItem("roles").includes("Admin") && (props.id && props.id !== localStorage.getItem("employeeId"))) && <FormButton onClick={resetPassword} style={{width: "200px", position: "absolute", marginTop: "10px", right: "50px"}} >
              Reset password
          </FormButton>}
        </>
        {!props.id && <>
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
              }
            })()}
          </div>
        </>}
        {((localStorage.getItem("roles").includes("Admin")) || (localStorage.getItem("roles").includes("HR"))) && props.id && <>
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
                return <BasicInformation empId={props.id} />;
              case EMPLOYMENT_INFO:
                return <EmploymentInformation empId={props.id} />;
              case EDUCATION_INFO:
                return <EducationInformation empId={props.id} />;
              }
            })()}
          </div>
        </>}
      </PageWrapper>
      {location.pathname=="/Profile" && openModal && <ModalLogin closeModal={setOpenModal} emp={employee}
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }} />}
    </>
  );
}
export default ProfileInfo;
