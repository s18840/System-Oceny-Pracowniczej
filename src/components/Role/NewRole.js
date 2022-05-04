import React, { useState } from "react";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  CompetenceWrapper,
  MarkersWrapper,
  CompetenceInsideWrapper,
  TableMarkers,
  RowLi,
  DescriptionField,
} from "../../styles/RoleStyle";
import {  
  NewButton,
  AddButton,
} from '../../styles/GlobalStyle';
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const dataJson = {
  content: [
    {
      competencesRequired: "Competence 1",
    },
    {
      competencesRequired: "Competence 2",
    },
    {
      competencesRequired: "Competence 3",
    },
    {
      competencesRequired: "Competence 4",
    },
    {
      competencesRequired: "Competence 5",
    },
    {
      competencesRequired: "Competence 6",
    },
  ],
};

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddButton
      onClick={() => {
        props.onClick();
        setAdded((prev) => !prev);
      }}
    >
      {added ? "Added" : "Add"}
    </AddButton>
  );
};

const NewCompetence = (props)=> {
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
  const [marks, setMarks] = useState([]);
  return (
    <>
      <PersonalDataHeadingText>
        {t("Creating new competence")}
        <NewButton onClick={() => {alert(marks.toString());window.location.href='/roleList'}}>{t("Add")}</NewButton>
      </PersonalDataHeadingText>
      <CompetenceWrapper>
        <CompetenceInsideWrapper>
          <Heading>
            <ProfileDataText>{t("Name") + ": "}</ProfileDataText>
            <InputField placeholder="Nazwa kompetencji"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Rank") + ": "}</ProfileDataText>
            <InputField placeholder="Ranga"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Competences required") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.competencesRequired}
                        <Button onClick={() => {setMarks((prev) => [...prev, el.competencesRequired])}}/> 
                      </RowLi>
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