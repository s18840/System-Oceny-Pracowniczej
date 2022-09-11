import React, { useEffect, useState, useContext } from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  PersonalDataHeadingText,
  TableDetailsMarker,
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";
import { log } from "loglevel";
import { get } from "../../Utils/APIUtils"
const dataJson = [
  "Job name:",
  "Job ID:",
];

function DepartmentJobList() {
  const [context] = useContext(Context);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    context && get(`Dto/jobs/${localStorage.getItem("employeeId")}`)
      .then(({ data }) => {
        setJobs(data);
      }).catch(err => log.warn(err));
  }, [context]);

  return (
    <>
      <PersonalDataHeadingText>Jobs in your department </PersonalDataHeadingText>
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        {jobs?.map((content) => (
          <Row key={content.jobID}>
            <TableDetailsDate>{content.name}</TableDetailsDate>
            <TableDetailsMarker>
              {content.jobID}
            </TableDetailsMarker>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default DepartmentJobList;
