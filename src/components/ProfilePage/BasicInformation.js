import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { InputField, ErrorsSpan } from "../../styles/GlobalStyle";
import useApi from "../../api/useApi";
import {
  AddressHeadingText,
  City,
  Country,
  DateOfBirth,
  District,
  FamilyName,
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
  Mail,
  CompanyMail,
} from "../../styles/ProfilePageStyle";
import { Context } from "../../pages/Context";

function BasicInformation() {
  const [context, setContext] = useContext(Context);
  const [employee, setEmployee] = useState();
  const [firstName, setFirstName] = useState(" ");
  const [secondName, setSecondName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [birthDate, setBirthDate] = useState(" ");
  const [street, setStreet] = useState(" ");
  const [buildingNumber, setBuildingNumber] = useState(" ");
  const [apartmentNumber, setApartmentNumber] = useState();
  const [city, setCity] = useState(" ");
  const [postalCode, setPostalCode] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [cellPhoneNumber, setCellPhoneNumber] = useState(" ");
  const [companyMail, setCompanyMail] = useState(" ");
  const [email, setEmail] = useState(" ");
  const { t } = useTranslation();
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
          setEmployee(data);
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
          setValue("companyMail", data.companyEmail ? data.companyEmail : null, {
            shouldValidate: true,
          });
        });
  }, [context]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
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
      companyEmail: e.companyMail,
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
      {!formReady ? t("Edit") : t("Save")}
    </FormButton>
  );

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <ProfileDetailedInfoWrapper>
          <PersonalDataHeadingText>
            {t("Personal Data")}
          </PersonalDataHeadingText>
          <AddressHeadingText>{t("Address")}</AddressHeadingText>
          <FirstName>
            <ProfileDataText>{t("First name")}</ProfileDataText>
            <InputField
              {...register("firstName", { 
                required: 'Required',
                maxLength : {
                  value: 32,
                  message: 'Too long name'
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: 'Provide correct name'
                  } 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {errors.firstName && errors.firstName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.firstName.message}</ErrorsSpan>
            )}
          </FirstName>
          <SecondName>
            <ProfileDataText>{t("Second name")}</ProfileDataText>
            <InputField
              {...register("secondName", {maxLength : {
                value: 32,
                message: 'Too long name'
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: 'Provide correct name'
                } 
            })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.secondName && errors.secondName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.secondName.message}</ErrorsSpan>
            )}
            {errors.secondName && errors.secondName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.secondName.message}</ErrorsSpan>
            )}
          </SecondName>
          <SurName>
            <ProfileDataText>{t("Surname")}</ProfileDataText>
            <InputField
              {...register("lastName", { 
                required: 'Required',
                maxLength : {
                  value: 64,
                  message: 'Too long surname'
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: 'Provide correct surname'
                  } 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {errors.lastName && errors.lastName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {errors.lastName && errors.lastName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.lastName.message}</ErrorsSpan>
            )}
          </SurName>
          {/* Walidacja do dorobienia */}
          <DateOfBirth>
            <ProfileDataText>{t("Date of birth")}</ProfileDataText>
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
            {errors.birthDate && errors.birthDate.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{"required"}</ErrorsSpan>
            )}
          </DateOfBirth>
          <PhoneNumber>
            <ProfileDataText>{t("Phone number")}</ProfileDataText>
            <InputField
              type="number"
              {...register("cellPhoneNumber", { 
                required: 'Required',
                maxLength : {
                  value: 9,
                  message: 'Number is too long'
                },
                minLength : {
                  value: 9,
                  message: 'Number is too short'
                } 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { "-webkit-appearance": "none", backgroundColor: "white" }
                  : { "-webkit-appearance": "none", backgroundColor: "#DDDDDD" }
              }
            />
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{"required"}</ErrorsSpan>
            )}
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "minLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
          </PhoneNumber>
          {/*<Mail>
            <ProfileDataText>{"Mail"}</ProfileDataText>
            <InputField
              {...register("email", ({required: true}))}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
            </Mail>*/}
          <CompanyMail>
            <ProfileDataText>{t("Company Mail")}</ProfileDataText>
            <InputField
            
              {...register("companyMail", { 
                required: 'Required',
                pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'It is not email'
                } 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.companyMail && errors.companyMail.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.companyMail.message}</ErrorsSpan>
            )}
            {errors.companyMail && errors.companyMail.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.companyMail.message}</ErrorsSpan>
            )}
          </CompanyMail>
          <Street>
            <ProfileDataText>{t("Street")}</ProfileDataText>
            <InputField
              {...register("street", { 
                required: 'Required',
                maxLength : {
                  value: 30,
                  message: 'Too long street'
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: 'Provide correct street'
                  } 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.street && errors.street.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
            {errors.street && errors.street.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
            {errors.street && errors.street.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.street.message}</ErrorsSpan>
            )}
          </Street>
          <HouseNumber>
            <ProfileDataText>{t("House number")}</ProfileDataText>
            <InputField
              {...register("buildingNumber", { 
                required: 'Required',
                maxLength : {
                  value: 5,
                  message: 'Too long number'
                },
                pattern: {
                  value: /(?!0)\d[0-3]{0,2}[a-zA-Z]{0,2}/,
                  message: 'Provide correct number'
                  }  
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.buildingNumber && errors.buildingNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {errors.buildingNumber && errors.buildingNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {errors.buildingNumber && errors.buildingNumber.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
          </HouseNumber>
          <City>
            <ProfileDataText>{t("City")}</ProfileDataText>
            <InputField
              {...register("city", { 
                required: 'Required',
                maxLength : {
                  value: 20,
                  message: 'Too long city'
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: 'Provide correct city'
                  }  
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.city && errors.city.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
            {errors.city && errors.city.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
            {errors.city && errors.city.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.city.message}</ErrorsSpan>
            )}
          </City>
          <District>
            <ProfileDataText>{t("Apartment number")}</ProfileDataText>
            <InputField
            type="number"
              {...register("apartmentNumber", { 
                maxLength : {
                  value: 5,
                  message: 'Too big number'
                },
 
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.apartmentNumber && errors.apartmentNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.apartmentNumber.message}</ErrorsSpan>
            )}
          </District>
          <PostalCode>
            <ProfileDataText>{t("Postal code")}</ProfileDataText>
            <InputField
              {...register("postalCode", { 
                required: 'Required',
                maxLength : {
                  value: 10,
                  message: 'Too long code'
                },
                pattern: {
                  value: /\d{2}-\d{3}/,
                  message: 'Provide correct code'
                  }  
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.postalCode && errors.postalCode.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {errors.postalCode && errors.postalCode.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {errors.postalCode && errors.postalCode.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.postalCode.message}</ErrorsSpan>
            )}
          </PostalCode>
          <Country>
            <ProfileDataText>{t("Country")}</ProfileDataText>
            <InputField
              {...register("country", { 
                required: 'Required',
                maxLength : {
                  value: 20,
                  message: 'Too long country'
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: 'Provide correct country'
                  }  
              })}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.country && errors.country.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.country.message}</ErrorsSpan>
            )}
            {errors.country && errors.country.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red" }}>{errors.country.message}</ErrorsSpan>
            )}
            {errors.country && errors.country.type === "pattern" && (
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
