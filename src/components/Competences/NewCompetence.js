import React from "react";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  CompetenceWrapper,
  MarkersWrapper,
  CompetenceInsideWrapper,
  Markers,
  MarkersAddButton,
  MarkersRow,
  TableMarkers,
  RowMarkers,
} from "../../styles/CompetenceStyle";
import { Span, TextField } from "../../styles/GlobalStyle";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <PersonalDataHeadingText>
        {t("Creating new competence")}
      </PersonalDataHeadingText>
      <CompetenceWrapper>
        <CompetenceInsideWrapper>
          <Heading>
            <ProfileDataText>{t("Name") + ": "}</ProfileDataText>
            <InputField placeholder="Nazwa kompetencji"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Grade") + ": "}</ProfileDataText>
            <InputField placeholder="Ocena"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Markers required") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {dataJson.content.map((content) => (
                <RowMarkers>
                  <td>{content.Marker}</td>
                  <td><MarkersAddButton>Add</MarkersAddButton></td>
                </RowMarkers>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>{t("Description") + ": "}</ProfileDataText>
          </Heading>
          <TextField {...register("message", { required: true })} />
        </CompetenceInsideWrapper>
      </CompetenceWrapper>
    </>
  );
}

export default NewCompetence;
