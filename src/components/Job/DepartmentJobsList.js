import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  PersonalDataHeadingText,
  TableDetailsMarker,
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";

const dataJson = [
  "Job name:",
  "Job ID:",
];

function DepartmentJobList() {
  const [context] = useContext(Context);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Dto/jobs/${localStorage.getItem(
            "employeeId"
          )}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token")
            }`,
          },
        })
        .then(({ data }) => {
          setJobs(data);
        });
  }, [context]);

  return (
    <>
      <PersonalDataHeadingText>Jobs in your department </PersonalDataHeadingText>
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {jobs?.map((content) => (
          <Row>
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
