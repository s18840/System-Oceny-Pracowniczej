import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
    context &&
      axios
        .get("https://localhost:5001/api/Dto/teams", {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token")
            }`,
          },
        })
        .then(({ data }) => {
          setTeams(data);
          console.log(data);
        });
  }, [context]);

  console.log(teams)
  return (
    <>
      <PersonalDataHeadingText>Teams List</PersonalDataHeadingText>
      <NewButton onClick={() => (window.location.href = "/newTeam")}>
        New
      </NewButton>

      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {teams?.map((content) => (
          <Row>
            <TableDetailsDate
              nameOfTeam ={content.teamName}
              departmentOfTeam ={content.departmentId}
              managerOfTeam ={content.managerId}>
              <Link to={{pathname:`/teamDetails`, state: content.managerId}} style={{  
                fontSize: "25px",
                fontWeight: "bold",
                color: "#ff4e01",
                textDecoration: "none"}}>
                {content.teamName}
              </Link>
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
                  <MarkersRow>{emp.firstName + " " + emp.lastName}</MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default TeamList;
