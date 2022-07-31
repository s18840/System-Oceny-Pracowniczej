import React from "react";
import {
  CompetenceGradeDetailContent,
  CompetenceGradeDetailContentBold,
  CompetenceGradeDetailsHeader,
  CompetenceGradeDetailsHeaderContent,
  CompetenceGradeDetailWrapper,
} from "../../styles/CompetencesGradeStyles";
import {Span, TextField} from "../../styles/GlobalStyle";

function CompetenceGradeDetails({grade}) {

  if (Object.entries(grade).length === 0) {
    return <></>;
  }

  return (
    <>
      <CompetenceGradeDetailsHeader>
        <CompetenceGradeDetailsHeaderContent>
          competence
        </CompetenceGradeDetailsHeaderContent>
        <CompetenceGradeDetailsHeaderContent>
          description
        </CompetenceGradeDetailsHeaderContent>
        <CompetenceGradeDetailsHeaderContent>
          grade
        </CompetenceGradeDetailsHeaderContent>
      </CompetenceGradeDetailsHeader>
      {grade.competenceGrades.map((value, index) => (
        <CompetenceGradeDetailWrapper key={value.competenceId}>
          <CompetenceGradeDetailContentBold>
            {(index + 1) + ". " + value.competenceName}
          </CompetenceGradeDetailContentBold>
          <CompetenceGradeDetailContent>
            {value.description}
          </CompetenceGradeDetailContent>
          <CompetenceGradeDetailContent>
            {value.grade}
          </CompetenceGradeDetailContent>
        </CompetenceGradeDetailWrapper>
      ))}
      <Span>Grade conclusion</Span>
      <TextField
        readOnly
        value={grade.conclusion}
        width="100%"
      />
    </>
  );
}

export default CompetenceGradeDetails;
