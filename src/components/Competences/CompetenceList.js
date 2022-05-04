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
} from "../../styles/CompetenceStyle";
import {  
  NewButton,
  EditButton,
} from '../../styles/GlobalStyle';

const dataJson = {
  titles: ["Competence name:", "Markers required", "Description"],
  content: [
    {
      competenceName: "Competence 1",
      markersRequired: ["Marker 1", "Marker 2", "Marker 3"],
    },
    {
      competenceName: "Competence 2",
      markersRequired: ["Marker 2"],
    },
    {
      competenceName: "Competence 3",
      markersRequired: ["Marker 11"],
    },
    {
      competenceName: "Competence 4",
      markersRequired: ["Marker 15"],
    },
    {
      competenceName: "Competence 6",
      markersRequired: ["Marker 15"],
    },
    {
      competenceName: "Competence 7",
      markersRequired: ["Marker 22"],
    },
    {
      competenceName: "Competence 8",
      markersRequired: ["Marker 25"],
    },
    {
      competenceName: "Competence 9",
      markersRequired: ["Marker 1", "Marker 2", "Marker 3"],
    },
  ],
};

function CompetenceList() {
  return (
    <>
      <PersonalDataHeadingText>Competence List</PersonalDataHeadingText>
      <EditButton>Edit</EditButton>
      <NewButton onClick={event =>  window.location.href='/newCompetence'}>New</NewButton>
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
            <TableDetailsDate>{content.competenceName}</TableDetailsDate>
            <TableDetailsMarker>
              <MarkersTable>
                {content.markersRequired?.map(marker =>(
                  <MarkersRow>
                    {marker}
                  </MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>
            <TableDetails>
              For {content.competenceName}, you will need{" "}
              {content.markersRequired+" "}.
            </TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default CompetenceList;
