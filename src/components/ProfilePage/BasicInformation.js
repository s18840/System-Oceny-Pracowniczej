import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { FormWrapper, InputField } from "../../styles/ProfilePageFormStyle";
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
} from "../../styles/ProfilePageStyle";

function BasicInformation() {
  let empId =7;
  
  const [formFirstName, setFirstName] = useState(" ");
  const [formSecondName, setSecondName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  const [formDateOfBirth, setDateOfBirth] = useState(" ");
  const [formStreet, setStreet] = useState(" ");
  const [formHouseNumber, setHouseNumber] = useState(" ");
  const [formApartmentNumber, setApartmentNumber] = useState();
  const [formCity, setCity] = useState(" ");
  const [formPostalCode, setPostalCode] = useState(" ");
  const [formCountry, setCountry] = useState(" ");
  const [formPhoneNumber, setPhoneNumber] = useState(" ");
  const [formMail, setMail] = useState(" ");
  const { emp } = useApi(`https://localhost:5001/api/Dto/emp/${empId}`);

  useEffect (()=>{
    const timer = setTimeout(()=>{
      setFirstName(emp.firstName);
      setSecondName(emp.secondName ? emp.secondName : "No Second Name");
      setSurname(emp.lastName);
      const newBirthDate = emp.birthDate.split('T')[0];
      setDateOfBirth(newBirthDate);
      setStreet(emp.street);
      setHouseNumber(emp.buildingNumber);
      setApartmentNumber(emp.apartmentNumber ? emp.apartmentNumber : 4);
      setCity(emp.city);
      setPostalCode(emp.postalCode ? emp.postalCode : "No Postal Code");
      setCountry(emp.country);
      setPhoneNumber(emp.cellPhoneNumber);
      setMail(emp.email);
    },11);
    return () => clearTimeout(timer);
  },[emp])

  const {register,handleSubmit,formState: { errors }} = useForm();
  const [formReady, setFormReady] = useState(false);

  const switchForm = () => {
    setFormReady(!formReady);
  };

  const prepareUser = () => {
    const obj = {
      firstName: formFirstName,
      lastName: formSecondName,
      surname: formSurname,
      dateofBirth: formDateOfBirth,
      street: formStreet,
      houseNumber: formHouseNumber,
      apartmentNumber: formApartmentNumber,
      city: formCity,
      postalCode: formPostalCode,
      country: formCountry,
      phoneNumber: formPhoneNumber,
      mail: formMail
    };

    return obj;
  };
  const submitForm = () => {
    if (!formReady) {
      console.log(prepareUser());
      //TUTAJ BĘDZIE AXIOS.PUT
    }
  };

  let button;
  if (!formReady) {
    button = (
      <FormButton onClick={switchForm} disabled={formReady}>
        {"Edit"}
      </FormButton>
    );
  } else {
    button = (
      <FormButton onClick={switchForm} disabled={!formReady}>
        {"Save"}
      </FormButton>
    );
  }

  // TODO Walidacja
  function isRequired(value) {
    return value != null && value.trim().length > 0;
  }
  const validateTest = (e) => {
    if (e.target.value.length === 0) {
      return;
    } else {
      return setFirstName(e.target.value);
    }
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <ProfileDetailedInfoWrapper>
          <PersonalDataHeadingText>{"Personal Data"}</PersonalDataHeadingText>
          <AddressHeadingText>{"Address"}</AddressHeadingText>
          <FirstName>
            <ProfileDataText>{"First name"}</ProfileDataText>
            <InputField
              type="text"
              value={formFirstName}
              {...register("formFirstName", {
                validate: (value) =>
                  value !== "" || console.log("No First Name") // JS only: <p>error message</p> TS only support string
              })}
              onChange={(e) => validateTest(e)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </FirstName>
          <SecondName>
            <ProfileDataText>{"Second name"}</ProfileDataText>
            <InputField
              type="text"
              value={formSecondName}
              {...register(formSecondName)}
              onChange={(e) => validateTest(e)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </SecondName>
          <SurName>
            <ProfileDataText>{"Surname"}</ProfileDataText>
            <InputField
              type="text"
              value={formSurname}
              {...register(formSurname)}
              onChange={(e) => setSurname(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </SurName>
          <DateOfBirth>
            <ProfileDataText>{"Date of birth"}</ProfileDataText>
            <InputField
              type="text"
              value={formDateOfBirth}
              {...register(formDateOfBirth)}
              onChange={(e) => setDateOfBirth(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </DateOfBirth>
          <PhoneNumber>
            <ProfileDataText>{"Phone number"}</ProfileDataText>
            <InputField
              type="text"
              value={formPhoneNumber}
              {...register(formPhoneNumber)}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </PhoneNumber>
          <Mail>
            <ProfileDataText>{"Mail"}</ProfileDataText>
            <InputField
              type="text"
              value={formMail}
              {...register(formMail)}
              onChange={(e) => setMail(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </Mail>
          <Street>
            <ProfileDataText>{"Street"}</ProfileDataText>
            <InputField
              type="text"
              value={formStreet}
              {...register(formStreet)}
              onChange={(e) => setStreet(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </Street>
          <HouseNumber>
            <ProfileDataText>{"House number"}</ProfileDataText>
            <InputField
              type="number"
              value={formHouseNumber}
              {...register(formHouseNumber)}
              onChange={(e) => setHouseNumber(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </HouseNumber>
          <City>
            <ProfileDataText>{"City"}</ProfileDataText>
            <InputField
              type="text"
              value={formCity}
              {...register(formCity)}
              onChange={(e) => setCity(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </City>
          <District>
              <ProfileDataText>{"Apartment number"}</ProfileDataText>
              <InputField
                value={formApartmentNumber}
                onChange={(e) => setApartmentNumber(e.target.value)}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
              ></InputField>
            </District>
          <PostalCode>
            <ProfileDataText>{"Postal code"}</ProfileDataText>
            <InputField
              type="text"
              value={formPostalCode}
              {...register(formPostalCode)}
              onChange={(e) => setPostalCode(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </PostalCode>
          <Country>
            <ProfileDataText>{"Country"}</ProfileDataText>
            <InputField
              type="text"
              value={formCountry}
              {...register(formCountry)}
              onChange={(e) => setCountry(e.target.value)}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </Country>
          {button}
        </ProfileDetailedInfoWrapper>
      </FormWrapper>
    </>
  );
}
export default BasicInformation;
