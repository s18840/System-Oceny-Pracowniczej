import React, { useEffect, useState, useContext } from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow,
  NewButton
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";
import { log } from "loglevel";
import { get } from "../../Utils/APIUtils"
const dataJson = ["Department name:", "Department Teams:", " Director:"];

function DepartmentList() {
  const [context] = useContext(Context);
  const [departments, setDepartments] = useState();
  useEffect(() => {
    context && get("Dto/deps")
      .then(({ data }) => {
        setDepartments(data);
      }).catch(err => log.warn(err));
  }, [context]);
  return (
    <>
      <PersonalDataHeadingText>Department List</PersonalDataHeadingText>
      {(localStorage.getItem("roles").includes("Admin")) && <NewButton onClick={() =>  window.location.href="/newDepartment"}>New</NewButton>}
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {departments?.map((content) => (
            <Row key={content.departmentId}>
              <TableDetailsDate>{content.departmentName}</TableDetailsDate>
              <TableDetailsMarker>
                <MarkersTable>
                  {content?.teams?.map((team) => (
                    <MarkersRow key={team.teamId}>{team.teamName}</MarkersRow>
                  ))}
                </MarkersTable>
              </TableDetailsMarker>
              <TableDetails>
                {content.directorName + " " + content.directorSurname}
              </TableDetails>
            </Row>
          ))}
        </tbody>
      </TableInfo>
    </>
  );
}

export default DepartmentList;
