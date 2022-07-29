import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  ProfileDataText,
  ModalButton,
  ModalTitleDiv,
  SelectJobs,
  OptionJobs
} from "../styles/ProfilePageStyle";
import { FormWrapper } from "../styles/ProfilePageFormStyle";
import { Context } from "../pages/Context";
import { useForm } from "react-hook-form";
import { InputField, ErrorsSpan, ErrorsLoginSpan } from "../styles/GlobalStyle";

function ModalEmployment( props ){
  const [context] = useContext(Context);
  const [jobs, setJobs] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const prepareEmployment = (e) => {
    const obj = {
      personalNumber: props.empId ? props.empId : localStorage.getItem("employeeId"),
      hireDate : e.hireDate,
      terminationDate : null,
      timeBasis : e.timeBasis,
      contractType : e.contractType,
      contractExpirationDate: e.expirationDate ,
      jobName: e.jobName
    };

    return obj;
  };

  function submitForm(data){
    const employment = prepareEmployment(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Employee/addEmployment`, employment,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ContentType: "application/json",
        },
      })
    //window.location.reload();
    props.closeModal(false)
  }

  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Dto/avaijobs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setJobs(data);
        });
  }, [context]);
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
        height: "550px",
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
            <ModalButton onClick={() => props.closeModal(false) }style={{alignSelf: "end"}}> X </ModalButton>
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
            <SelectJobs {...register("jobName", { required: true })}>{jobs?.map((job)=>(
              <OptionJobs value={job.name} >{job.name}</OptionJobs>
            ))}</SelectJobs>
            {/* <InputField
              {...register("jobName", { required: "Please provide job name that already exists in database" })}
            />
            {errors.jobName && errors.jobName.type === "minLength" && (
              <ErrorsLoginSpan font-size="20" style={{ color: "red" }}>{errors.jobName.message}</ErrorsLoginSpan>
            )}
            {errors.jobName && errors.jobName.type === "required" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red", display:"block" }}>{errors.jobName.message}</ErrorsLoginSpan>
              )} */}
          </div>
          <div>
            <ProfileDataText>Time basis</ProfileDataText>
            <InputField
              {...register("timeBasis", { required: "Please provide correct time basis" })}
            />
              {errors.timeBasis && errors.timeBasis.type === "required" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red", display:"block" }}>{errors.timeBasis.message}</ErrorsLoginSpan>
              )}
          </div>
          <div>
            <ProfileDataText>Contract type</ProfileDataText>
            <InputField
              {...register("contractType", { required: "Please provide correct contract type" })}
            />
              {errors.contractType && errors.contractType.type === "required" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red", display:"block" }}>{errors.contractType.message}</ErrorsLoginSpan>
              )}
          </div>
          <div>
            <ProfileDataText>Expiration date</ProfileDataText>
            <InputField
              type="date"
              {...register("expirationDate", { required: true })}
            />
          </div>
          <div style={{display: "flex", justifyContent:"end", padding: "20px 0px 20px 20px"}}>
            <ModalButton onClick={() => props.closeModal(false)}> Close </ModalButton>
            <ModalButton style={{marginLeft:20, width:140}} > Continue </ModalButton>
          </div>
        </FormWrapper>
      </div>
    </div>
  )
}

export default ModalEmployment