import React from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  NewCompetenceButton,
  EditCompetenceButton
} from "../../styles/CompetenceStyle";

const dataJson = {
  titles: ["Competence name:", "Markers required", "Description"],
  content: [
    {
      competenceName: "Competence 1",
      markersRequired: ["Marker 1","Marker 2"],
      description: "Description for Competence 1, you will need marker1.",
    },
    {
      competenceName: "Competence 2",
      markersRequired: "Marker 2",
      description: "Description for Competence 2, you will need marker2.",
    },
    {
      competenceName: "Competence 1",
      markersRequired: "Marker 1",
      description: "Description for Competence 1, you will need marker1.",
    },
    {
      competenceName: "Competence 2",
      markersRequired: "Marker 2",
      description: "Description for Competence 2, you will need marker2.",
    },
    {
      competenceName: "Competence 1",
      markersRequired: "Marker 1",
      description: "Description for Competence 1, you will need marker1.",
    },
    {
      competenceName: "Competence 2",
      markersRequired: "Marker 2",
      description: "Description for Competence 2, you will need marker2.",
    },
  ],
};

function CompetenceList() {
  return (
    <>
      <PersonalDataHeadingText>Competence List</PersonalDataHeadingText>
      <EditCompetenceButton>
        <text>Edit Competence</text>
      </EditCompetenceButton>
      <NewCompetenceButton>
        <text>New Competence</text>
      </NewCompetenceButton>
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
            <TableDetailsDate>{content.competenceName}</TableDetailsDate>
            <TableDetails>{content.markersRequired}</TableDetails>
            <TableDetails>{content.description}</TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default CompetenceList;
