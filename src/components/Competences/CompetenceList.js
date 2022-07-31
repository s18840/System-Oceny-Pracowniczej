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
import { log } from "loglevel";
const dataJson = ["Competence name:", "Markers required:", "Description:"];

function CompetenceList() {
  const [context] = useContext(Context);
  const [competences, setCompetences] = useState();
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Dto/comps`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setCompetences(data);
        }).catch(err => log.warn(err));
  }, [context]);
  return (
    <>
      <PersonalDataHeadingText>Competence List</PersonalDataHeadingText>
      {(localStorage.getItem("roles").includes("HR")) && <NewButton onClick={() =>  window.location.href="/newCompetence"}>New</NewButton> }
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {competences?.map((content) => (
          <Row key={content.competenceId}>
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
        </tbody>
      </TableInfo>
    </>
  );
}

export default CompetenceList;
