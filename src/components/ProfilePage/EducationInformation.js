import React from "react";
import {
  TableInfo,
  TableDetailsDate,
  EmploymentTableBorder,
  EmploymentTableDateLine,
  TableBodyBorder,
  Row,
  MarginSet,
  DateWrapper,
} from "../../styles/ProfilePageStyle";
const today = new Date();
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
const EducationInformation = () => (
  <>
    <MarginSet>
      <TableInfo class="table">
        <thead>
          <tr>
            {dataJson.titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {dataJson.content.map((content) => (
          <Row>
            <DateWrapper>
              <TableDetailsDate>
                <td>{content.StartDate}</td>
              </TableDetailsDate>
              <EmploymentTableDateLine />
              <TableDetailsDate>
                <td>{content.GraduationDate}</td>
              </TableDetailsDate>
            </DateWrapper>
            <td>{content.Institution}</td>
            <td>{content.Degree}</td>
          </Row>
        ))}
      </TableInfo>
    </MarginSet>
  </>
);

export default EducationInformation;
