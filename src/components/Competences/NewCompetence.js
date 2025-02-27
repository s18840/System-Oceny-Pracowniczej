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
  ErrorsSpan
} from "../../styles/GlobalStyle";
import {
  ModalCompetencesOpenButton,
} from "../../styles/ProfilePageStyle";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { useForm } from "react-hook-form";
import ModalCompetences from "../ModalCompetences";
import { log } from "loglevel";
import { post } from "../../Utils/APIUtils";
const NewCompetence = () => {
  const {
    register,
    handleSubmit,
    getValues,
  } = useForm();
  const submitForm = (data) => {
    if(markers.length === 0 || getValues("name") === "" || getValues("description") === "") return;
    const competence = prepareCompetence(data);
    post("Dto/comps/add", competence)
      .catch(err => log.warn(err));
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
          <NewButton
            type="submit"
            onClick={() => {window.location.href="/Competences"}} disabled={(markers.length === 0 || getValues("name") === "" || getValues("description") === "")}>Create</NewButton>
          {(markers.length === 0 || getValues("name") === "" || getValues("description") === "") &&
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Please provide all needed data</ErrorsSpan>}
        </PersonalDataHeadingText>
        <Wrapper>
          <InsideWrapper>
            <Heading>
              <ProfileDataText>Name: </ProfileDataText>
              <InputField {...register("name", { required: true })}/>
            </Heading>
            <Heading>
              <ProfileDataText>Description: </ProfileDataText>
            </Heading>
            <DescriptionField {...register("description", { required: true })} />
            <Heading style={{display: "flex", alignItems: "center"}}>
              <ProfileDataText>Markers required: </ProfileDataText>
              <ModalCompetencesOpenButton id="modalCompetencesButton" onClick={(e) =>{
                e.preventDefault();
                setOpenModal(true)}}>
                Add
              </ModalCompetencesOpenButton>
            </Heading>
            <MarkersSmallWrapper>
              <TableMarkers className="table">
                {markers.map((el) => (
                  <tr key={el.markerId}>
                    <td>
                      <RowLi>
                        {el.name}
                      </RowLi>
                    </td>
                  </tr>
                ))}
              </TableMarkers>
            </MarkersSmallWrapper>
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
