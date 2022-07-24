import React from "react";
import {ContentWrapper, SubTitle} from "../../styles/GlobalStyle";
import {
  CompetenceGradeDetailContent,
  CompetenceGradeDetailContentBold,
  CompetenceGradeDetailWrapper,
} from "../../styles/CompetencesGradeStyles";

function CompetenceGradeDetails({grade}) {

  console.log(grade)

  return (
    <ContentWrapper>
      <SubTitle>Competences Grade</SubTitle>
      { grade.competenceGrades.map((value, index) => (
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
    </ContentWrapper>
  );
}

export default CompetenceGradeDetails;
