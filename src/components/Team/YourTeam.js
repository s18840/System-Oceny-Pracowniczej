import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/Navigation/NavBar";
import Footer from "../../components/Footer/Footer";
import { Context } from "../../pages/Context";
import {
  ProfileHeaderText,
  ProfileInfoDiv,
  ProfileSubHeaderText,
  ProfileText,
  ProfileTextWrapper,
  StatusIcon,
  ProfileAvatar,
} from "../../styles/ProfilePageStyle";
import {
  PageWrapper,
  TeamsWrapper,
  TableTeams,
  RowLi,
  Heading,
  ProfileDataText,
} from "../../styles/GlobalStyle";
import { Link } from "react-router-dom";
import { log } from "loglevel";
import { get } from "../../Utils/APIUtils"
function YourTeam() {
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [status, setStatus] = useState(" ");
  useEffect(() => {
    context && get(`Employee/team/${localStorage.getItem("employeeId")}`)
      .then(({ data }) => {
        setEmployee(data);
        setStatus(data.status);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect(() => {
    context && get(`Dto/comps/${localStorage.getItem("employeeId")}`)
      .then(({ data }) => {
        setCompetences(data);
      }).catch(err => log.warn(err));
  }, [context]);

  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PageWrapper style={{marginBottom:40}}>
        <Heading style={{marginLeft:30, marginTop:30}}>
          <ProfileDataText>Members of your team: </ProfileDataText>
        </Heading>
        {employee?.map((emp) => (
          <ProfileInfoDiv key={emp.personalNumber} style={{marginTop:20}}>
            <ProfileAvatar to={`/profile/${emp.personalNumber}`}>
              {(emp.firstName[0]) + (emp.lastName[0])}
            </ProfileAvatar>
            <ProfileTextWrapper>
              <ProfileHeaderText>
                <Link to={`/profile/${emp.personalNumber}`} style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#ff4e01",
                  textDecoration: "none"}}>
                  {emp.firstName + " " + emp.lastName}
                </Link>
              </ProfileHeaderText>
            </ProfileTextWrapper>
            <ProfileTextWrapper>
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
              <ProfileSubHeaderText>
                {"Personal number" + ": "}
                <ProfileText>{" " + emp.personalNumber}</ProfileText>
              </ProfileSubHeaderText>
            </ProfileTextWrapper>
          </ProfileInfoDiv>
        ))}
        <Heading style={{marginLeft:30, marginTop:30}}>
          <ProfileDataText>Competences in your team: </ProfileDataText>
        </Heading>
        <TeamsWrapper style={{marginLeft:30}}>
          <TableTeams className="table">
            {competences?.map((el) => (
              <tr key={el.competenceId}>
                <td>
                  <RowLi>
                    {el.name}
                  </RowLi>
                </td>
              </tr>
            ))}
          </TableTeams>
        </TeamsWrapper>
      </PageWrapper>

    </>

  );
}

export default YourTeam;
