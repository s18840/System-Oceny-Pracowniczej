import React, { useRef } from "react";
import axios from "axios";
import {
  ProfileDataText,
  ModalTitleDiv,
  ModalInput
} from "../styles/ProfilePageStyle";
import { FormWrapper } from "../styles/ProfilePageFormStyle";
import { useForm } from "react-hook-form";
import { InputField, ErrorsLoginSpan } from "../styles/GlobalStyle";
import { log } from "loglevel";
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

    return obj;
  };
  function submitForm(data){
    const pswd = preparePassword(data);
    axios.put(`${process.env.REACT_APP_API_ADDRESS}Account/password`, pswd,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).catch(err => log.warn(err));
    window.location.reload();
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
        height: "450px",
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
          height: "450px",
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
                    value: 6,
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
                    value: 6,
                    message: "Password is too short"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                    message: "At least: \n -one Uppercase letter, \n -one lowercase letter, \n -one number"
                  } })}
              />
              {errors.password && (
                <ErrorsLoginSpan font-size="20" style={{ color: "red", display: "flex", whiteSpace: "pre" }}>{errors.password.message}</ErrorsLoginSpan>
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
