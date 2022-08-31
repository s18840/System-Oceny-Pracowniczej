import React, { useEffect, useState, useContext } from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow,
  NewButton,
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";
import { Link } from "react-router-dom";
import { log } from "loglevel";
import { get } from "../../Utils/APIUtils"
const dataJson = [
  "Team name:",
  "Department name:",
  "Team Manager:",
  " Employees:",
];

function TeamList() {
  const [context] = useContext(Context);
  const [teams, setTeams] = useState();
  useEffect(() => {
    context && get("Dto/teams")
      .then(({ data }) => {
        setTeams(data);
      }).catch(err => log.warn(err));
  }, [context]);

  return (
    <>
      <PersonalDataHeadingText>Teams List</PersonalDataHeadingText>
      {(localStorage.getItem("roles").includes("HR") || localStorage.getItem("roles").includes("Admin") || localStorage.getItem("roles").includes("Director")) && <NewButton onClick={() => (window.location.href = "/newTeam")}>
        New
      </NewButton>}
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams?.map((content) => (
            <Row key={content.teamId}>
              <TableDetailsDate
                nameOfTeam ={content.teamName}
                departmentOfTeam ={content.departmentId}
                managerOfTeam ={content.managerId}>
                {(localStorage.getItem("roles").includes("HR") || localStorage.getItem("roles").includes("Admin") || localStorage.getItem("roles").includes("Director")) && <Link to={{pathname:"/teamDetails", state: content.managerId}} style={{  
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#ff4e01",
                  textDecoration: "none"}}>
                  {content.teamName}
                </Link>}
                {(localStorage.getItem("roles").includes("Manager")) && <div style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#ff4e01",
                  textDecoration: "none"}}>
                  {content.teamName}
                </div>}
              </TableDetailsDate>
              <TableDetailsDate>{content.departmentName}</TableDetailsDate>
              <TableDetails>
                <Link to={`/profile/${content.managerId}`} style={{  
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#ff4e01",
                  textDecoration: "none"}}>
                  {content.managerFirstName + " " + content.managerLastName}
                </Link>
              </TableDetails>
              <TableDetailsMarker>
                <MarkersTable>
                  {content?.employees?.map((emp) => (
                    <MarkersRow key={emp.personalNumber}>{emp.firstName + " " + emp.lastName}</MarkersRow>
                  ))}
                </MarkersTable>
              </TableDetailsMarker>
            </Row>
          ))}
        </tbody>
      </TableInfo>
    </>
  );
}

export default TeamList;
