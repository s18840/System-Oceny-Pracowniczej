import React, { useEffect, useState, useContext } from "react";
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
import moment from "moment";
import { log } from "loglevel";
import { put, get } from "../../Utils/APIUtils";
function BasicInformation(props) {
  const [context] = useContext(Context);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    context && !props.empId &&
      get(`Dto/emp/${localStorage.getItem("employeeId")}`)
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
        }).catch(err => log.warn(err));
  }, [context, setValue, props.empId]);

  useEffect(() => {
    context && props.empId &&
      get(`Dto/emp/${props.empId}`)
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
        }).catch(err => log.warn(err));
  }, [context, setValue, props.empId]);
  const [formReady, setFormReady] = useState(false);

  const switchForm = () => {
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
    if (!formReady && !props.empId) {
      const employeeReady = prepareUser(data);
      if(props.empId == localStorage.getItem("employeeId") || !props.empId){
        localStorage.setItem("fullName",`${data.firstName} ${data.lastName}`)
      }
      put(`Dto/emp/${localStorage.getItem("employeeId")}`, employeeReady)
        .catch(err => log.warn(err));
    }
    if (!formReady && props.empId) {
      const employeeReady = prepareUser(data);
      put(`Dto/emp/${props.empId}`, employeeReady)
        .catch(err => log.warn(err));
    }
    if(!formReady) window.location.reload();
  };

  let button;

  button = (
    <FormButton onClick={switchForm}>
      {!formReady ? "Edit" : "Save"}
    </FormButton>
  );
  const dateNow = moment(moment.now()).format("YYYY-MM-DD");
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
            {formReady && errors.firstName && (
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
            {formReady && errors.secondName && (
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
            {formReady && errors.lastName && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
          </SurName>
          <DateOfBirth>
            <ProfileDataText>Date of birth</ProfileDataText>
            <InputField
              type="date"
              {...register("birthDate", {
                required: "Required",
                validate: {
                  over18: value => moment(value, "YYYY-MM-DD").diff(dateNow, "years", true)<-18,
                }
              })}
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
            {formReady &&errors.birthDate && errors.birthDate.type !== "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: "-23px", marginLeft: "-64px" }}>You must be over 18</ErrorsSpan>
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
                  ? { "WebkitAppearance": "none", backgroundColor: "white" }
                  : { "WebkitAppearance": "none", backgroundColor: "#DDDDDD" }
              }
            />
            {formReady && errors.cellPhoneNumber && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>required</ErrorsSpan>
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
            {formReady && errors.email && (
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
            {formReady && errors.street && (
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
            {formReady && errors.buildingNumber && (
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
            {formReady && errors.city && (
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
            {formReady && errors.postalCode && (
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
            {formReady && errors.country && (
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
