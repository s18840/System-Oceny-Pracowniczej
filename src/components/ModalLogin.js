import React, { useState, useRef } from "react";
import axios from "axios";
import {
  ProfileDataText,
  ModalButton,
  ModalTitleDiv,
  ModalInput
} from "../Styles/ProfilePageStyle";
import { FormWrapper } from "../Styles/ProfilePageFormStyle";
import { useForm } from "react-hook-form";
import { InputField, ErrorsSpan, ErrorsLoginSpan } from "../Styles/GlobalStyle";

function ModalLogin({ closeModal }){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const password = useRef({});
  password.current = watch("password", "");

  const preparePassword = (e) => {
    const obj = {
      oldPassword : e.oldPassword,
      newPassword : e.password,
    };
    console.log(obj)

    return obj;
  };
  function submitForm(data){
    console.log(data)
    const pswd = preparePassword(data);
    axios.put("https://localhost:5001/api/Account/password", pswd,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
    closeModal(false)
  }
  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(200, 200, 200, 0.6)",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      zIndex: 15
    }}>
      <div style={{
        width: "500px",
        height: "380px",
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
            height: "380px",
            borderRadius: "12px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
        }}>
          <FormWrapper onSubmit={handleSubmit(submitForm)}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <ModalTitleDiv>Change default password</ModalTitleDiv>
            </div>
            <div>
              <ProfileDataText>Old password</ProfileDataText>
              <InputField
              type="password"
                {...register("oldPassword", { 
                  required: "Required",
                  minLength : {
                    value: 3,
                    message: "Password is too short"
                  }, })}
              />
              {errors.oldPassword && errors.oldPassword.type === "required" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red" }}>{errors.oldPassword.message}</ErrorsLoginSpan>
              )}
              {errors.oldPassword && errors.oldPassword.type === "minLength" && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red" }}>{errors.oldPassword.message}</ErrorsLoginSpan>
              )}
            </div>
            <div>
              <ProfileDataText>New password</ProfileDataText>
              <InputField
                name="password"
                type="password"
                {...register("password",{ 
                  required: "Required",
                  minLength : {
                    value: 3,
                    message: "Password is too short"
                  }, })}
              />
              {errors.password && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red" }}>{errors.password.message}</ErrorsLoginSpan>
              )}
            </div>
            <div>
              <ProfileDataText>Repeat new password</ProfileDataText>
              <InputField
                name="passwordRepeat"
                type="password"
                {...register("passwordRepeat",{
                  required: "Required",
                  validate: value =>
                    value === password.current || "Passwords do not match"
                }
                )}
              />
              {errors.passwordRepeat && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red" }}>{errors.passwordRepeat.message}</ErrorsLoginSpan>
              )}

            </div>
            <div style={{display: "flex", justifyContent:"end", padding: "20px 0px 20px 20px"}}>
              <ModalInput id="inputModal" type="submit" style={{marginLeft:20, width:140}} value="Continue"/>
            </div>
            </FormWrapper>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
