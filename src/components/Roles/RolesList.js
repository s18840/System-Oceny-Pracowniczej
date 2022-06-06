import React from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  NewRoleButton,
  EditRoleButton
} from "../../styles/RolesStyle";

const dataJson = {
  titles: ["Role name:", "Rank:", "Competences required:"],
  content: [
    {
        roleName: "Competence 1",
        rank: "Rank 1",
        competencesRequired: ["Competence 1","Competence 2"],
    },
    {
        roleName: "Competence 2",
        rank: "Rank 2",
        competencesRequired: ["Competence 2","Competence 2"],
    },
    {
        roleName: "Competence 1",
        rank: "Rank 1",
        competencesRequired: ["Competence 1","Competence 2"],
    },
    {
        roleName: "Competence 2",
        rank: "Rank 2",
        competencesRequired: ["Competence 2","Competence 2"],
    },
    
  ],
};

function RolesList() {
  return (
    <>
      <PersonalDataHeadingText>Roles List</PersonalDataHeadingText>
      <EditRoleButton>
        Edit Role
      </EditRoleButton>
      <NewRoleButton>
        New Role
      </NewRoleButton>
      <TableInfo class="table">
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
            <TableDetails>{content.rank}</TableDetails>
            <TableDetails>{content.competencesRequired}</TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default RolesList;
