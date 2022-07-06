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
  EditButton,
} from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
import { Context } from "../../pages/Context";

const dataJson = [
  "Team name:",
  "Department name:",
  "Team Manager:",
  " Employees:",
];

function TeamList() {
  const { t } = useTranslation();
  const [context, setContext] = useContext(Context);
  const [teams, setTeams] = useState();
  useEffect(() => {
    context &&
      axios
        .get(`https://localhost:5001/api/Dto/teams`, {
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
  return (
    <>
      <PersonalDataHeadingText>{t("Teams List")}</PersonalDataHeadingText>
      {/* <EditButton>{t("Edit")}</EditButton> */}
      <NewButton onClick={(event) => (window.location.href = "/newTeam")}>
        {t("New")}
      </NewButton>
      {console.log(teams)}
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{t(title)}</th>
            ))}
          </tr>
        </thead>
        {teams?.map((content) => (
          <Row>
            <TableDetailsDate>{content.teamName}</TableDetailsDate>
            <TableDetailsDate>{content.departmentName}</TableDetailsDate>
            <TableDetails>
              {content.managerFirstName + " " + content.managerLastName}
            </TableDetails>
            <TableDetailsMarker>
              <MarkersTable>
                {content?.employees?.slice(0, 3).map((emp) => (
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
