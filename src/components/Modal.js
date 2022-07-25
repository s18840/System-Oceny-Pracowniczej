import React, { useContext } from "react";
import axios from "axios";
import {
  ProfileDataText,
  ModalButton,
  ModalTitleDiv
} from "../Styles/ProfilePageStyle";
import { FormWrapper } from "../Styles/ProfilePageFormStyle";
import { Context } from "../pages/Context";
import { useForm } from "react-hook-form";
import { InputField} from "../Styles/GlobalStyle";

function Modal({ closeModal }){
  const [context] = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const prepareEducation = (e) => {
    const obj = {
      educationid : 0,
      degree : e.degree,
      placeOfEducation : e.placeOfEducation,
      graduationDate : e.graduationDate,
      personal_Number : context.employeeId,
    };
    console.log(obj)

    return obj;
  };

  function submitForm(data){
    console.log(data)
    const education = prepareEducation(data);
    axios.post("https://localhost:5001/api/Education", education,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  }
  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(200, 200, 200, 0.6)",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      left: 200
    }}>
      <div style={{
        width: "500px",
        height: "500px",
        borderRadius: "12px",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        flexDirection: "column",
        padding: "25px",
      }}>
        <FormWrapper onSubmit={handleSubmit(submitForm)}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <ModalTitleDiv>Add education</ModalTitleDiv>
            <ModalButton onClick={() => closeModal(false) }style={{alignSelf: "end"}}> X </ModalButton>
          </div>
          <div>
            <ProfileDataText>Graduation date</ProfileDataText>
            <InputField
              {...register("graduationDate", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Degree</ProfileDataText>
            <InputField
              {...register("degree", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Place of education</ProfileDataText>
            <InputField
              {...register("placeOfEducation", { required: true })}
            />
          </div>
          <div style={{display: "flex", justifyContent:"end", padding: "20px 0px 20px 20px"}}>
            <ModalButton onClick={() => closeModal(false)}> Close </ModalButton>
            <ModalButton style={{marginLeft:20, width:140}} > Continue </ModalButton>
          </div>
        </FormWrapper>
      </div>
    </div>
  )
}

export default Modal
