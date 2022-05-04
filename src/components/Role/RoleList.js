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
} from "../../styles/RoleStyle";
import {  
  NewButton,
  EditButton,
} from '../../styles/GlobalStyle';
import { useTranslation } from "react-i18next";

const dataJson = {
  titles: ["Role name:", "Rank", "Competences required"],
  content: [
    {
      roleName: "Role 1",
      rank: "Rank 1",
      competencesRequired: ["Competence 1", "Competence 2", "Competence 3"],
    },
    {
      roleName: "Role 2",
      rank: "Rank 14",
      competencesRequired: ["Competence 1", "Competence 3"],
    },
    {
      roleName: "Role 3",
      rank: "Rank 12",
      competencesRequired: ["Competence 1", "Competence 2", "Competence 3"],
    },
    {
      roleName: "Role 4",
      rank: "Rank 5",
      competencesRequired: ["Competence 1", "Competence 10", "Competence 3", "Competence 14", "Competence 5"],
    },
    {
      roleName: "Role 5",
      rank: "Rank 11",
      competencesRequired: ["Competence 5", "Competence 2", "Competence 3"],
    },
    {
      roleName: "Role 6",
      rank: "Rank 15",
      competencesRequired: ["Competence 1", "Competence 2", "Competence 3"],
    },
  ],
};

function RoleList() {
  const { t } = useTranslation();
  return (
    <>
      <PersonalDataHeadingText>{t("Role List")}</PersonalDataHeadingText>
      <EditButton>{t("Edit")}</EditButton>
      <NewButton onClick={event =>  window.location.href='/newRole'}>{t("New")}</NewButton>
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
            <TableDetailsDate>{content.roleName}</TableDetailsDate>
            <TableDetails>
              {content.rank}
            </TableDetails>
            <TableDetailsMarker>
              <MarkersTable>
                {content.competencesRequired?.map(comp =>(
                  <MarkersRow>
                    {comp}
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

export default RoleList;
