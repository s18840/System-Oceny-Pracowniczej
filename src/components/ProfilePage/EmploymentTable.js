import React from "react";
import {DateWrapper, EmploymentTableDateLine, Row, TableDetailsDate, TableInfo,} from "../../styles/ProfilePageStyle";
import {useTranslation} from 'react-i18next';
import useApi from "../../api/useApi";
const dataJson = {
  titles: ["Time", "Department", "Job", "Team"],
  content: [
    {
      DateStart: "14.05.2011",
      Department: "HR",
      Job: "Manager",
      Team: "12c",
    },
    {
      DateStart: "12.05.2019",
      Department: "Testing",
      Job: "Tester",
      Team: "-",
    },
    {
      DateStart: "14.05.2021",
      Department: "IT",
      Job: "Java Developer",
      Team: "22c",
    },
  ],
};
function EmploymentTable () {
  let empId =7;
  const { loading , emp } = useApi(`https://localhost:5001/api/Dto/emp/${empId}`);
  console.log(emp)
  const {t} = useTranslation();
  return(
  <>
    <TableInfo className="table">
      <thead>
      <tr>
        {dataJson.titles.map((title) => (
          <th>{t(title)}</th>
        ))}
      </tr>
      </thead>
      {dataJson.content.map((content) => (
        <Row>
          <td>{content.DateStart}</td>
          <td>{content.Department}</td>
          <td>{content.Job}</td>
          <td>{content.Team}</td>
        </Row>
      ))}
    </TableInfo>
  </>
  )
};
export default EmploymentTable;
