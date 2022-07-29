import React, { useContext } from "react";
import axios from "axios";
import {
  ProfileDataText,
  ModalButton,
  ModalTitleDiv
} from "../styles/ProfilePageStyle";
import { FormWrapper } from "../styles/ProfilePageFormStyle";
import { Context } from "../pages/Context";
import { useForm } from "react-hook-form";
import { InputField, ErrorsSpan, ErrorsLoginSpan } from "../styles/GlobalStyle";

function Modal(props){
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
      personal_Number : props.empId ? props.empId : localStorage.getItem("employeeId"),
    };

    return obj;
  };

  function submitForm(data){
    const education = prepareEducation(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Education`, education,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ContentType: "application/json",
        },
      })
    window.location.reload();
    props.closeModal(false)
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
        height: "350px",
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
            <ModalButton onClick={() => props.closeModal(false) }style={{alignSelf: "end"}}> X </ModalButton>
          </div>
          <div>
            <ProfileDataText>Graduation date</ProfileDataText>
            <InputField
            type="date"
              {...register("graduationDate", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Degree</ProfileDataText>
            <InputField
              {...register("degree", { required: "Please provide correct degree" })}
            />
            {errors.degree && errors.degree.type === "required" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red", display:"block" }}>{errors.degree.message}</ErrorsLoginSpan>
              )}
          </div>
          <div>
            <ProfileDataText>Place of education</ProfileDataText>
            <InputField
              {...register("placeOfEducation", { required: "Please provide correct education" })}
            />
            {errors.placeOfEducation && errors.placeOfEducation.type === "required" && (
              <ErrorsLoginSpan font-size="20" style={{ color: "red", display:"block" }}>{errors.placeOfEducation.message}</ErrorsLoginSpan>
            )}
          </div>
          <div style={{display: "flex", justifyContent:"end", padding: "20px 0px 20px 20px"}}>
            <ModalButton onClick={() => props.closeModal(false)}> Close </ModalButton>
            <ModalButton style={{marginLeft:20, width:140}} type="submit"> Continue </ModalButton>
          </div>
        </FormWrapper>
      </div>
    </div>
  )
}

export default Modal
