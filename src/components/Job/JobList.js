import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  PersonalDataHeadingText,
  TableDetailsMarker,
  MarkersTable,
  MarkersRow,
  NewButton,
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";
import { log } from "loglevel";
const dataJson = [
  "Job name:",
  "Department name:",
  "Department number:",
];

function JobList() {
  const [context] = useContext(Context);
  const [jobs, setJobs] = useState();
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Dto/jobs`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token")
            }`,
          },
        })
        .then(({ data }) => {
          setJobs(data);
        }).catch(err => log.warn(err));
  }, [context]);

  return (
    <>
      <PersonalDataHeadingText>Jobs List</PersonalDataHeadingText>
      {(localStorage.getItem("roles").includes("HR") || localStorage.getItem("roles").includes("Admin") ) && <NewButton onClick={() => (window.location.href = "/newJob")}>
        New
      </NewButton>}
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jobs?.map((content) => (
            <Row key={content.jobID}>
              <TableDetailsDate>{content.name}</TableDetailsDate>
              <TableDetailsMarker>
                <MarkersTable>
                  {content.jobDepartments?.map(dep =>(
                    <MarkersRow key={dep.departmentId}>
                      {dep.departmentName}
                    </MarkersRow>
                  ))}
                </MarkersTable>
              </TableDetailsMarker>
              <TableDetailsMarker>
                <MarkersTable>
                  {content.jobDepartments?.map(dep =>(
                    <MarkersRow key={dep.departmentId}>
                      {dep.departmentId}
                    </MarkersRow>
                  ))}
                </MarkersTable>
              </TableDetailsMarker>
            </Row>
          ))}
        </tbody>
      </TableInfo>
    </>
  );
}

export default JobList;
