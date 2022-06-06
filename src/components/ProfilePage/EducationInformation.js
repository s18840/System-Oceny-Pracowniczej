import React from "react";
import {DateWrapper, EmploymentTableDateLine, Row, TableDetailsDate, TableInfo,} from "../../styles/ProfilePageStyle";
import { useTranslation } from "react-i18next";
import useApi from "../../api/useApi";
//const today = new Date();

const dataJson = {
  titles: ["Time", "Institution", "Degree"],
  content: [
    {
      StartDate: "14.05.2013",
      GraduationDate: "14.05.2016",
      Institution: "Politechnika Warszawska",
      Degree: "Geography",
    },
    {
      StartDate: "14.05.2016",
      GraduationDate: "11.10.2019",
      Institution: "PJATK",
      Degree: "Programming",
    },
    {
      StartDate: "08.09.2010",
      GraduationDate: "30.05.2013",
      Institution: "Liceum XVI im. A.Mickiewicza",
      Degree: "-",
    },
  ],
};
function EducationInformation () {
  let empId =7;
  const { loading , emp } = useApi(`https://localhost:5001/api/Education/emp/${empId}`);
  console.log(emp)
  const { t } = useTranslation();
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
              <td>{content.StartDate}</td>
            </TableDetailsDate>
            <EmploymentTableDateLine/>
            <TableDetailsDate>
              <td>{content.GraduationDate}</td>
            </TableDetailsDate>
          </DateWrapper>
          <td>{content.Institution}</td>
          <td>{content.Degree}</td>
        </Row>
      ))}
    </TableInfo>
  </>
  )};

export default EducationInformation;
