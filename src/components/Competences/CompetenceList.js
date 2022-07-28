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

const dataJson = ["Competence name:", "Markers required", "Description"];

function CompetenceList() {
  const [context] = useContext(Context);
  const [competences, setCompetences] = useState();
  useEffect(() => {
    context &&
      axios
        .get("https://localhost:5001/api/Dto/comps", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setCompetences(data);
          console.log(data);
        });
  }, [context]);
  {console.log(competences)}
  return (
    <>
      <PersonalDataHeadingText>Competence List</PersonalDataHeadingText>
      {(localStorage.getItem("roles").includes("HR") || localStorage.getItem("roles").includes("Admin") || localStorage.getItem("roles").includes("Director") || localStorage.getItem("roles").includes("Manager")) && <NewButton onClick={() =>  window.location.href="/newCompetence"}>New</NewButton> }
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {competences?.map((content) => (
          <Row>
            <TableDetailsDate>{content.name}</TableDetailsDate>
            <TableDetailsMarker>
              <MarkersTable>
                {content.markers?.map(marker =>(
                  <MarkersRow>
                    {marker.name}
                  </MarkersRow>
                ))}
              </MarkersTable>
            </TableDetailsMarker>
            <TableDetails>
              <div>
                {content.description + "."}
              </div>
            </TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default CompetenceList;
