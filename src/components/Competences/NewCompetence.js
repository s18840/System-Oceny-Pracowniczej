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
} from "../../styles/GlobalStyle";
import {
  ModalCompetencesOpenButton,
} from "../../styles/ProfilePageStyle";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { useForm } from "react-hook-form";
import ModalCompetences from "../ModalCompetences";
import axios from "axios";

const NewCompetence = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const submitForm = (data) => {
    const competence = prepareCompetence(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Dto/comps/add`, competence,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  };
  const [markers, setMarkers] = useState([]);
  const [openModal,setOpenModal] = useState(false);

  const prepareCompetence = (e) => {
    const obj = {
      competenceId : 0,
      name : e.name,
      description : e.description,
      markers : markers,
    };

    return obj;
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <PersonalDataHeadingText>
          Creating new competence
          <NewButton onClick={() => {window.location.href="/Competences"}}>Add</NewButton>
        </PersonalDataHeadingText>
        <Wrapper>
          <InsideWrapper>
            <Heading>
              <ProfileDataText>Name: </ProfileDataText>
              <InputField placeholder="Competence name" {...register("name", { required: true })}/>
            </Heading>
            <Heading style={{display: "flex", alignItems: "center"}}>
              <ProfileDataText>Markers required: </ProfileDataText>
              <ModalCompetencesOpenButton id="modalCompetencesButton" onClick={() =>{setOpenModal(true)}}>
                Add
              </ModalCompetencesOpenButton>
            </Heading>
            <MarkersSmallWrapper>
              <TableMarkers className="table">
                {markers.map((el) => (
                  <tr>
                    <td>
                      <RowLi>
                        {el.name}
                      </RowLi>
                    </td>
                  </tr>
                ))}
              </TableMarkers>
            </MarkersSmallWrapper>
            <Heading>
              <ProfileDataText>Description: </ProfileDataText>
            </Heading>
            <DescriptionField {...register("description", { required: true })} />
          </InsideWrapper>
        </Wrapper>

      </FormWrapper>
      {openModal && <ModalCompetences closeModal={setOpenModal} addMarker={setMarkers}
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
