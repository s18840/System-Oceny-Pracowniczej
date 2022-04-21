import React from "react";
import {DateWrapper, EmploymentTableDateLine, Row, TableDetailsDate, TableInfo,} from "../../styles/ProfilePageStyle";
import {useTranslation} from 'react-i18next';
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
function EmploymentTable () {
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
          <DateWrapper>
            <TableDetailsDate>
              <td>{content.DateStart}</td>
            </TableDetailsDate>
            <EmploymentTableDateLine/>
            <TableDetailsDate>
              <td>{content.DateEnd}</td>
            </TableDetailsDate>
          </DateWrapper>
          <td>
            
            {content.Department}</td>
          <td>{content.Job}</td>
          <td>{content.Team}</td>
        </Row>
      ))}
    </TableInfo>
  </>
  )
};
export default EmploymentTable;
