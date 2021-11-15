import React from "react";
import {
  EmploymentTableInfo,
  EmploymentTableDetailsDate,
  EmploymentTableBorder,
  EmploymentTableDateLine,
  TableBodyBorder,
  EduRow,
  MarginSet,
  EmploymentDateWrapper,
} from "../../styles/ProfilePageStyle";

const dataJson = {
  titles: ["Time", "Department", "Job", "Team"],
  content: [
    {
      DateStart: "14.05.2011",
      DateEnd: "15.12.2012",
      Department: "HR",
      Job: "Manager",
      Team: "12c",
    },
    {
      DateStart: "12.05.2019",
      DateEnd: "23.12.2020",
      Department: "Testing",
      Job: "Tester",
      Team: "-",
    },
    {
      DateStart: "14.05.2021",
      DateEnd: "15.11.2021",
      Department: "IT",
      Job: "Java Developer",
      Team: "22c",
    },
  ],
};
const EmploymentTable = () => (
  <>
    <MarginSet>
      <EmploymentTableInfo class="table">
        <thead>
          <tr>
            {dataJson.titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {dataJson.content.map((content) => (
          <EduRow>
            <EmploymentDateWrapper>
              <EmploymentTableDetailsDate>
                <td>{content.DateStart}</td>
              </EmploymentTableDetailsDate>
              <EmploymentTableDateLine />
              <EmploymentTableDetailsDate>
                <td>{content.DateEnd}</td>
              </EmploymentTableDetailsDate>
            </EmploymentDateWrapper>
            <td>{content.Department}</td>
            <td>{content.Job}</td>
            <td>{content.Team}</td>
          </EduRow>
        ))}
      </EmploymentTableInfo>
    </MarginSet>
  </>
);
export default EmploymentTable;
