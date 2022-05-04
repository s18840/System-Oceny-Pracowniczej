import React, { useState } from "react";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  Wrapper,
  MarkersSmallWrapper,
  InsideWrapper,
  TableMarkers,
  RowLi,
  DescriptionField,  
  NewButton,
  AddButton,
} from '../../styles/GlobalStyle';
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const dataJson = {
  content: [
    {
      markersRequired: "Marker 1",
    },
    {
      markersRequired: "Marker 2",
    },
    {
      markersRequired: "Marker 3",
    },
    {
      markersRequired: "Marker 4",
    },
    {
      markersRequired: "Marker 5",
    },
    {
      markersRequired: "Marker 6",
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
        <NewButton onClick={() => {alert(marks.toString());window.location.href='/competenceList'}}>{t("Add")}</NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>{t("Name") + ": "}</ProfileDataText>
            <InputField placeholder="Nazwa kompetencji"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Markers required") + ": "}</ProfileDataText>
          </Heading>
          <MarkersSmallWrapper>
            <TableMarkers className="table">
              {content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.markersRequired}
                        <Button onClick={() => {setMarks((prev) => [...prev, el.markersRequired])}}/> 
                      </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersSmallWrapper>
          <Heading>
            <ProfileDataText>{t("Description") + ": "}</ProfileDataText>
          </Heading>
          <DescriptionField {...register("message", { required: true })} />
        </InsideWrapper>
      </Wrapper>

    </>
  );
}

export default NewCompetence;