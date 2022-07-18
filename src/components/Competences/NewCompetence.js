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
import {
  ModalCompetencesOpenButton,
} from "../../styles/ProfilePageStyle";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ModalCompetences from "../ModalCompetences";
import axios from "axios";

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
    const competence = prepareCompetence(data);
    axios.post(`https://localhost:5001/api/Dto/comps/add`, competence, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  };
  const { content } = dataJson;
  const [marks, setMarks] = useState([]);
  const [markery, setMarkery] = useState([]);
  const [openModal,setOpenModal] = useState(false);

  const prepareCompetence = (e) => {
    const obj = {
      competenceId : 0,
      name : e.name,
      description : e.description,
      markers : markery,
    };
    console.log(obj)

    return obj;
  };
  return (
    <>
    <FormWrapper onSubmit={handleSubmit(submitForm)}>
      <PersonalDataHeadingText>
        {"Creating new competence"}
        <NewButton onClick={() => {window.location.href='/competenceList'}}>{t("Add")}</NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>{"Name" + ": "}</ProfileDataText>
            <InputField placeholder="Nazwa kompetencji" {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading style={{display: "flex", alignItems: "center"}}>
            <ProfileDataText>{"Markers required" + ": "}</ProfileDataText>
            <ModalCompetencesOpenButton id="modalCompetencesButton" onClick={() =>{setOpenModal(true)}}>
              {"Add"}
            </ModalCompetencesOpenButton>
          </Heading>
          <MarkersSmallWrapper>
            <TableMarkers className="table">
              {markery.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.name}
                        {/* <Button onClick={() => {setMarks((prev) => [...prev, el.markersRequired])}}/>  */}
                      </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersSmallWrapper>
          <Heading>
            <ProfileDataText>{"Description" + ": "}</ProfileDataText>
          </Heading>
          <DescriptionField {...register("description", { required: true })} />
        </InsideWrapper>
      </Wrapper>

    </FormWrapper>
    {openModal && <ModalCompetences closeModal={setOpenModal} addMarker={setMarkery}
    style={{    
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
      }} />}
    </>
  );
}

export default NewCompetence;