import React from "react";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
  NewProjectButton,
  EditProjectButton,
} from "../../styles/ProjectStyle";

const dataJson = {
  titles: ["Start date", "End date", "Name"],
  content: [
    {
      DateStart: "12.04.2021",
      DateEnd: "-",
      Name: "Aplikacja Gakko 2.0 dla PJATK Warszawa",
    },
    {
      DateStart: "10.03.2021",
      DateEnd: "12.07.2021",
      Name: "Aplikacja mobilna dla Orange Polska",
    },
    {
      DateStart: "24.01.2019",
      DateEnd: "31.03.2019",
      Name: "Strona internetowa Legia.pl",
    },
    {
      DateStart: "12.04.2021",
      DateEnd: "-",
      Name: "Aplikacja Gakko 2.0 dla PJATK Warszawa",
    },
    {
      DateStart: "10.03.2021",
      DateEnd: "12.07.2021",
      Name: "Aplikacja mobilna dla Orange Polska",
    },
    {
      DateStart: "24.01.2019",
      DateEnd: "31.03.2019",
      Name: "Strona internetowa Legia.pl",
    },
    {
      DateStart: "12.04.2021",
      DateEnd: "-",
      Name: "Aplikacja Gakko 2.0 dla PJATK Warszawa",
    },
    {
      DateStart: "10.03.2021",
      DateEnd: "12.07.2021",
      Name: "Aplikacja mobilna dla Orange Polska",
    },
    {
      DateStart: "-",
      DateEnd: "-",
      Name: "TBA",
    },
    {
      DateStart: "-",
      DateEnd: "-",
      Name: "TBA",
    },
    {
      DateStart: "-",
      DateEnd: "-",
      Name: "TBA",
    },
    {
      DateStart: "-",
      DateEnd: "-",
      Name: "TBA",
    },
  ],
};

function ProjectList() {
  return (
    <>
      <PersonalDataHeadingText>Project List</PersonalDataHeadingText>
      <EditProjectButton>
        Edit Project
      </EditProjectButton>
      <NewProjectButton>
        New Project
      </NewProjectButton>
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {dataJson.content.map((content) => (
          <Row>
            <TableDetailsDate>{content.DateStart}</TableDetailsDate>
            <TableDetailsDate>{content.DateEnd}</TableDetailsDate>
            <TableDetails>{content.Name}</TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default ProjectList;
