import React from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  NewButton,
  EditButton,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow
} from "../../styles/TeamStyle";
import { useTranslation } from "react-i18next";

const dataJson = {
  titles: ["Team name:", "Team Manager:","Employees:"],
  content: [
    {
      teamName: "Team 1",
      manager: "Andrzej Kowal",
      emp: ["Anna Zajko", "Krzysztof Tomczyk", "Andrzej Stonczyk"]
    },
    {
      teamName: "Team 2",
      manager: "Wojciech Zator",
      emp: ["Anna Zajko", "Krzysztof Tomczyk", "Andrzej Stonczyk"]
    },    {
      teamName: "Team 3",
      manager: "Andrzej Kowal",
      emp: ["Anna Zajko", "Krzysztof Tomczyk", "Andrzej Stonczyk"]
    },
    {
      teamName: "Team 4",
      manager: "Jan Adamczyk",
      emp: ["Krzysztof Tomczyk", "Andrzej Stonczyk"]
    },
  ],
};

function DepartmentList() {
  const { t } = useTranslation();
  return (
    <>
      <PersonalDataHeadingText>{t("Teams List")}</PersonalDataHeadingText>
      <EditButton>{t("Edit")}</EditButton>
      <NewButton onClick={event =>  window.location.href='/newTeam'}>{t("New")}</NewButton>
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {dataJson.content.map((content) => (
          <Row>
            <TableDetailsDate>{content.teamName}</TableDetailsDate>
            <TableDetails>
              {content.manager}
            </TableDetails>
            <TableDetailsMarker>
              <MarkersTable>
                {content.emp?.map(emp =>(
                  <MarkersRow>
                    {emp}
                  </MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>

          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default DepartmentList;
