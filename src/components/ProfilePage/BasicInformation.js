import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { InputField, ErrorsSpan } from "../../styles/GlobalStyle";
import {
  AddressHeadingText,
  City,
  Country,
  DateOfBirth,
  District,
  FirstName,
  HouseNumber,
  PersonalDataHeadingText,
  PostalCode,
  ProfileDataText,
  ProfileDetailedInfoWrapper,
  SecondName,
  Street,
  SurName,
  FormButton,
  PhoneNumber,
  CompanyMail,
} from "../../styles/ProfilePageStyle";
import { Context } from "../../pages/Context";

function BasicInformation() {
  const [context] = useContext(Context);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    context &&
      axios
        .get(
          `https://localhost:5001/api/Dto/emp/${localStorage.getItem(
            "employeeId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setValue("firstName", data.firstName, { shouldValidate: true });
          setValue("secondName", data.secondName ? data.secondName : null, {
            shouldValidate: true,
          });
          setValue("lastName", data.lastName, { shouldValidate: true });
          setValue(
            "birthDate",
            data?.birthDate.split("T")[0] ? data?.birthDate.split("T")[0] : null,
            { shouldValidate: true }
          );
          setValue("street", data.street, { shouldValidate: true });
          setValue("buildingNumber", data.buildingNumber, {
            shouldValidate: true,
          });
          setValue(
            "apartmentNumber",
            data.apartmentNumber ? data.apartmentNumber : null,
            { shouldValidate: true }
          );
          setValue("city", data.city, { shouldValidate: true });
          setValue("postalCode", data.postalCode, { shouldValidate: true });
          setValue("country", data.country, { shouldValidate: true });
          setValue("cellPhoneNumber", data.cellPhoneNumber, {
            shouldValidate: true,
          });
          setValue("email", data.email ? data.email : null, {
            shouldValidate: true,
          });
        });
  }, [context, setValue]);

  const [formReady, setFormReady] = useState(false);

  const switchForm = () => {
    //console.log(formReady,isValid)
    setFormReady((currentFormReady) => !(currentFormReady && isValid));
  };

  const prepareUser = (e) => {
    const obj = {
      firstName: e.firstName,
      secondName: e.secondName,
      lastName: e.lastName,
      birthDate: e.birthDate,
      cellPhoneNumber: e.cellPhoneNumber,
      stationaryPhoneNumber: null,
      email: "0000000@at.xxx",
      companyEmail: e.email,
      country: e.country,
      city: e.city,
      street: e.street,
      buildingNumber: e.buildingNumber,
      apartmentNumber: e.apartmentNumber,
      postalCode: e.postalCode,
    };

    return obj;
  };
  const submitForm = (data) => {
    if (!formReady) {
      const employeeReady = prepareUser(data);
      axios.put(`https://localhost:5001/api/Dto/emp/${localStorage.getItem(
        "employeeId"
      )}`, employeeReady,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
    }
  };

  let button;

  button = (
    <FormButton onClick={switchForm}>
      {!formReady ? "Edit" : "Save"}
    </FormButton>
  );

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <ProfileDetailedInfoWrapper>
          <PersonalDataHeadingText>
            Personal Data
          </PersonalDataHeadingText>
          <AddressHeadingText>Address</AddressHeadingText>
          <FirstName>
            <ProfileDataText>First name</ProfileDataText>
            <InputField
              {...register("firstName", {
                required: "Required",
                maxLength : {
                  value: 32,
                  message: "Too long name"
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Provide correct name"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.firstName && errors.firstName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {formReady && errors.firstName && errors.firstName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {formReady && errors.firstName && errors.firstName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
          </FirstName>
          <SecondName>
            <ProfileDataText>Second name</ProfileDataText>
            <InputField
              {...register("secondName", {maxLength : {
                value: 32,
                message: "Too long name"
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Provide correct name"
              }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.secondName && errors.secondName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.secondName.message}</ErrorsSpan>
            )}
            {formReady && errors.secondName && errors.secondName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.secondName.message}</ErrorsSpan>
            )}
          </SecondName>
          <SurName>
            <ProfileDataText>Surname</ProfileDataText>
            <InputField
              {...register("lastName", {
                required: "Required",
                maxLength : {
                  value: 64,
                  message: "Too long surname"
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Provide correct surname"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.lastName && errors.lastName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {formReady && errors.lastName && errors.lastName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {formReady && errors.lastName && errors.lastName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
          </SurName>
          {/* Walidacja do dorobienia */}
          <DateOfBirth>
            <ProfileDataText>Date of birth</ProfileDataText>
            <InputField
              type="date"
              {...register("birthDate", { required: true })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.birthDate && errors.birthDate.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>required</ErrorsSpan>
            )}
          </DateOfBirth>
          <PhoneNumber>
            <ProfileDataText>Phone number</ProfileDataText>
            <InputField
              type="number"
              {...register("cellPhoneNumber", {
                required: "Required",
                maxLength : {
                  value: 9,
                  message: "Number is too long"
                },
                minLength : {
                  value: 9,
                  message: "Number is too short"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { "-webkit-appearance": "none", backgroundColor: "white" }
                  : { "-webkit-appearance": "none", backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.cellPhoneNumber && errors.cellPhoneNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>required</ErrorsSpan>
            )}
            {formReady && errors.cellPhoneNumber && errors.cellPhoneNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
            {formReady && errors.cellPhoneNumber && errors.cellPhoneNumber.type === "minLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
          </PhoneNumber>
          <CompanyMail>
            <ProfileDataText>E-mail</ProfileDataText>
            <InputField
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "It is not email"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.email && errors.email.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.email.message}</ErrorsSpan>
            )}
            {formReady && errors.email && errors.email.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.email.message}</ErrorsSpan>
            )}
          </CompanyMail>
          <Street>
            <ProfileDataText>Street</ProfileDataText>
            <InputField
              {...register("street", {
                required: "Required",
                maxLength : {
                  value: 30,
                  message: "Too long street"
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Provide correct street"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.street && errors.street.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
            {formReady && errors.street && errors.street.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
            {formReady && errors.street && errors.street.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
          </Street>
          <HouseNumber>
            <ProfileDataText>House number</ProfileDataText>
            <InputField
              {...register("buildingNumber", {
                required: "Required",
                maxLength : {
                  value: 5,
                  message: "Too long number"
                },
                pattern: {
                  value: /(?!0)\d[0-3]{0,2}[a-zA-Z]{0,2}/,
                  message: "Provide correct number"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.buildingNumber && errors.buildingNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {formReady && errors.buildingNumber && errors.buildingNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {formReady && errors.buildingNumber && errors.buildingNumber.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
          </HouseNumber>
          <City>
            <ProfileDataText>City</ProfileDataText>
            <InputField
              {...register("city", {
                required: "Required",
                maxLength : {
                  value: 20,
                  message: "Too long city"
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Provide correct city"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.city && errors.city.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
            {formReady && errors.city && errors.city.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
            {formReady && errors.city && errors.city.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
          </City>
          <District>
            <ProfileDataText>Apartment number</ProfileDataText>
            <InputField
              type="number"
              {...register("apartmentNumber", {
                maxLength : {
                  value: 5,
                  message: "Too big number"
                },

              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.apartmentNumber && errors.apartmentNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.apartmentNumber.message}</ErrorsSpan>
            )}
          </District>
          <PostalCode>
            <ProfileDataText>Postal code</ProfileDataText>
            <InputField
              {...register("postalCode", {
                required: "Required",
                maxLength : {
                  value: 10,
                  message: "Too long code"
                },
                pattern: {
                  value: /\d{2}-\d{3}/,
                  message: "Provide correct code"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.postalCode && errors.postalCode.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {formReady && errors.postalCode && errors.postalCode.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {formReady && errors.postalCode && errors.postalCode.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
          </PostalCode>
          <Country>
            <ProfileDataText>Country</ProfileDataText>
            <InputField
              {...register("country", {
                required: "Required",
                maxLength : {
                  value: 20,
                  message: "Too long country"
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Provide correct country"
                }
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.country && errors.country.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.country.message}</ErrorsSpan>
            )}
            {formReady && errors.country && errors.country.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.country.message}</ErrorsSpan>
            )}
            {formReady && errors.country && errors.country.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.country.message}</ErrorsSpan>
            )}
          </Country>
          {button}
        </ProfileDetailedInfoWrapper>
      </FormWrapper>
    </>
  );
}
export default BasicInformation;
