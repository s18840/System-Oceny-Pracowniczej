import React, { useState } from "react";
import {
  ProfileDataText,
  ModalButton,
  ModalTitleDiv,
  ModalInput
} from "../styles/ProfilePageStyle";
import { FormWrapper } from "../styles/ProfilePageFormStyle";
import { useForm } from "react-hook-form";
import { InputField,DescriptionInputField} from "../styles/GlobalStyle";

function ModalCompetences({ closeModal, addMarker }){
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  function submitForm(data){
    console.log(data)
    addMarker((prev) => [...prev, data]);
    closeModal(false)
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
              <ModalTitleDiv>Add marker</ModalTitleDiv>
              <ModalButton onClick={() => closeModal(false) }style={{alignSelf: "end"}}> X </ModalButton>
            </div>
            <div>
              <ProfileDataText>Marker name</ProfileDataText>
              <InputField
                {...register("name", { required: true })}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
              />
            </div>
            <div>
              <ProfileDataText>Marker description</ProfileDataText>
              <DescriptionInputField
                {...register("description", { required: true })}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
              />
            </div>
            <div style={{display: "flex", justifyContent:"end", padding: "20px 0px 20px 20px"}}>
              <ModalButton onClick={() => closeModal(false)}> Close </ModalButton>
              <ModalInput id="inputModal" type="submit" style={{marginLeft:20, width:140}} value="Continue"/>
            </div>
            </FormWrapper>
        </div>
      </div>
    </div>
  )
}

export default ModalCompetences
