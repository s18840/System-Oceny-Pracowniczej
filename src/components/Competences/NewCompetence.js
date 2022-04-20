import React from "react";
import {
  Name,
  Grade,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  CompetenceWrapper,

} from "../../styles/CompetenceStyle";

import { useTranslation } from "react-i18next";

const dataJson = {
  content: [
    {
      Marker: "Marker 1",
    },
    {
      Marker: "Marker 2",
    },
    {
      Marker: "Marker 3",
    },
    {
      Marker: "Marker 4",
    },
  ],
};

function NewCompetence() {
  const { t } = useTranslation();
  return (
    <>
      <PersonalDataHeadingText>Creating new Competence</PersonalDataHeadingText>
      <CompetenceWrapper>
        <Name>
          <ProfileDataText>{t("Name")}</ProfileDataText>
          <InputField placeholder="Nazwa kompetencji"></InputField>
        </Name>
        <div>
          <ProfileDataText>{t("Grade")}</ProfileDataText>
          <InputField placeholder="Ocena"></InputField>
        </div>
      </CompetenceWrapper>
    </>
  );
}

export default NewCompetence;
