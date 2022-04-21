import React from "react";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  CompetenceWrapper,
  MarkersWrapper,
  CompetenceInsideWrapper,
  MarkersAddButton,
  TableMarkers,
  RowLi,
  DescriptionField
} from "../../styles/CompetenceStyle";
import { TextField } from "../../styles/GlobalStyle";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
const dataJson = {
  content: [
    {
      markersRequired: ["Marker 1", "Marker 2", "Marker 3"],
    },
    {
      markersRequired: ["Marker 4"],
    },
    {
      markersRequired: ["Marker 1", "Marker 2", "Marker 3"],
    },
    {
      markersRequired: ["Marker 4"],
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
  const { content } = dataJson;
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
              {content.map((el) => (
                <tr>
                  <td>
                    {el.markersRequired.map((marker) => (
                      <RowLi>
                        {marker}
                        <MarkersAddButton>{t("Add")}</MarkersAddButton>
                      </RowLi>
                    ))}
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>{t("Description") + ": "}</ProfileDataText>
          </Heading>
          <DescriptionField {...register("message", { required: true })} />
        </CompetenceInsideWrapper>
      </CompetenceWrapper>
    </>
  );
}

export default NewCompetence;
