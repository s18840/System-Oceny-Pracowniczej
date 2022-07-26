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
import { InputField} from "../styles/GlobalStyle";

function ModalEmployment({ closeModal }){
  const [context] = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const prepareEmployment = (e) => {
    const obj = {
      personalNumber: localStorage.getItem("employeeId"),
      hireDate : e.hireDate,
      terminationDate : null,
      timeBasis : e.timeBasis,
      contractType : e.contractType,
      contractExpirationDate: e.expirationDate ,
      jobName: e.jobName
    };
    console.log(obj)

    return obj;
  };

  function submitForm(data){
    console.log(data)
    const employment = prepareEmployment(data);
    console.log(employment)
    axios.post("https://localhost:5001/api/Employee/addEmployment", employment,
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
            <ModalTitleDiv>Add employment</ModalTitleDiv>
            <ModalButton onClick={() => closeModal(false) }style={{alignSelf: "end"}}> X </ModalButton>
          </div>
          <div>
            <ProfileDataText>Hire date</ProfileDataText>
            <InputField
              type="date"
              {...register("hireDate", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Job name</ProfileDataText>
            <InputField
              {...register("jobName", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Time basis</ProfileDataText>
            <InputField
              {...register("timeBasis", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Contract type</ProfileDataText>
            <InputField
              {...register("contractType", { required: true })}
            />
          </div>
          <div>
            <ProfileDataText>Expiration date</ProfileDataText>
            <InputField
              type="date"
              {...register("expirationDate", { required: true })}
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

export default ModalEmployment
