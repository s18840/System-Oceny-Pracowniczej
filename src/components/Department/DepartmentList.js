import React from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow
} from "../../styles/DepartmentStyle";
import {  
  NewButton,
  EditButton,
} from '../../styles/GlobalStyle';
import { useTranslation } from "react-i18next";

const dataJson = {
  titles: ["Department name:", "Department Teams:","Director:"],
  content: [
    {
      departmentName: "Department 1",
      teams: ["Team 1", "Team 2", "Team 3"],
      director: "Wojciech Antczak"
    },
    {
      departmentName: "Department 2",
      teams: ["Team 2"],
      director: "Wojciech Antczak"
    },
    {
      departmentName: "Department 3",
      teams: ["Team 11"],
      director: "Joanna Bajko"
    },
    {
      departmentName: "Department 4",
      teams: ["Team 15"],
      director: "Wojciech Antczak"
    },
    {
      departmentName: "Department 6",
      teams: ["Team 15"],
      director: "Joanna Bajko"
    },
    {
      departmentName: "Department 7",
      teams: ["Team 22"],
      director: "Wojciech Antczak"
    },
    {
      departmentName: "Department 8",
      teams: ["Team 25"],
      director: "Joanna Bajko"
    },
    {
      departmentName: "Department 9",
      teams: ["Team 1", "Team 2", "Team 3"],
      director: "Wojciech Antczak"
    },
  ],
};

function DepartmentList() {
  const { t } = useTranslation();
  return (
    <>
      <PersonalDataHeadingText>{t("Department List")}</PersonalDataHeadingText>
      <EditButton>{t("Edit")}</EditButton>
      <NewButton onClick={event =>  window.location.href='/newDepartment'}>{t("New")}</NewButton>
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
            <TableDetailsDate>{content.departmentName}</TableDetailsDate>
            <TableDetailsMarker>
              <MarkersTable>
                {content.teams?.map(marker =>(
                  <MarkersRow>
                    {marker}
                  </MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>
            <TableDetails>
              {content.director}
            </TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default DepartmentList;
