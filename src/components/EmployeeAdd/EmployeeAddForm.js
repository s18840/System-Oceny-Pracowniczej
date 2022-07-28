import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { InputField, Span } from "../../styles/GlobalStyle";
import { EmployeeAddWrapper } from "../../styles/FormEmpStyles";
import {
  AddressHeadingText,
  City,
  Country,
  DateOfBirth,
  District,
  FirstName,
  HouseNumber,
  PostalCode,
  ProfileDataText,
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
  const [context] = useContext(Context);
  const [firstName, setFirstName] = useState(" ");
  const [secondName, setSecondName] = useState(" FD");
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
  const [stationaryPhoneNumber, setStationaryPhoneNumber] = useState("12345");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [formReady, setFormReady] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);

  const switchForm = () => {
    setFormReady((currentFormReady) => !(currentFormReady && isValid));
  };

  const obj = {
    firstName: firstName,
    secondName: secondName,
    lastName: lastName,
    birthDate: birthDate,
    cellPhoneNumber: cellPhoneNumber,
    stationaryPhoneNumber: stationaryPhoneNumber,
    email: email,
    companyEmail: companyMail,
    country: country,
    city: city,
    street: street,
    buildingNumber: buildingNumber,
    apartmentNumber: apartmentNumber,
    postalCode: postalCode,
  };
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ContentType: "application/json",
    },
  };
  const submitForm = () => {
    context &&
      axios
        .post("http://localhost:5000/api/Dto/addEmp", obj, headers)
        .then((resp) => {
          setIsSucceed(true);
          clearForm();
          setTimeout(() => {
            setIsSucceed(false);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  const clearForm = () => {
    setFirstName(" ");
    setSecondName(" ");
    setLastName(" ");
    setBirthDate(" ");
    setStreet(" ");
    setBuildingNumber(" ");
    setApartmentNumber(" ");
    setCity(" ");
    setCountry(" ");
    setEmail(" ");
    setPostalCode(" ");
    setCellPhoneNumber(" ");
    setCompanyMail(" ");
    setStationaryPhoneNumber(" ");
  };
  let button;

  button = (
    <FormButton onClick={switchForm}>
      {!formReady ? "Edit" : "Add"}
    </FormButton>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "200px",
          width: "500px",
          marginLeft: "600px",
          marginTop: "100px",
        }}
      >
        <FormWrapper onSubmit={handleSubmit(submitForm)}>
          <EmployeeAddWrapper>
            <AddressHeadingText>Create New Employee</AddressHeadingText>
            <FirstName>
              <ProfileDataText>First name</ProfileDataText>
              <InputField
                {...register("firstName", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              {errors.username && errors.username.type === "required" && (
                <Span style={{ color: "red" }}>REQUIRED</Span>
              )}
            </FirstName>
            <SecondName>
              <ProfileDataText>Second name</ProfileDataText>
              <InputField
                {...register("secondName", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setSecondName(e.target.value)}
              />
            </SecondName>
            <SurName>
              <ProfileDataText>Surname</ProfileDataText>
              <InputField
                {...register("lastName", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setLastName(e.target.value)}
              />
            </SurName>
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
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </DateOfBirth>
            <PhoneNumber>
              <ProfileDataText>Phone number</ProfileDataText>
              <InputField
                type="number"
                {...register("cellPhoneNumber", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { "-webkit-appearance": "none", backgroundColor: "white" }
                    : {
                      "-webkit-appearance": "none",
                      backgroundColor: "#DDDDDD",
                    }
                }
                onChange={(e) => setCellPhoneNumber(e.target.value)}
              />
            </PhoneNumber>
            <Mail>
              <ProfileDataText>Mail</ProfileDataText>
              <InputField
                {...register("email", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </Mail>
            <CompanyMail>
              <ProfileDataText>Company Mail</ProfileDataText>
              <InputField
                {...register("companyMail", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setCompanyMail(e.target.value)}
              />
            </CompanyMail>
            <Street>
              <ProfileDataText>Street</ProfileDataText>
              <InputField
                {...register("street", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setStreet(e.target.value)}
              />
            </Street>
            <HouseNumber>
              <ProfileDataText>House number</ProfileDataText>
              <InputField
                {...register("buildingNumber", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setBuildingNumber(e.target.value)}
              />
            </HouseNumber>
            <City>
              <ProfileDataText>City</ProfileDataText>
              <InputField
                {...register("city", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setCity(e.target.value)}
              />
            </City>
            <District>
              <ProfileDataText>Apartment number</ProfileDataText>
              <InputField
                {...register("apartmentNumber", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setApartmentNumber(e.target.value)}
              />
            </District>
            <PostalCode>
              <ProfileDataText>Postal code</ProfileDataText>
              <InputField
                {...register("postalCode", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </PostalCode>
            <Country>
              <ProfileDataText>Country</ProfileDataText>
              <InputField
                {...register("country", { required: true })}
                disabled={!formReady}
                style={
                  !formReady
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#DDDDDD" }
                }
                onChange={(e) => setCountry(e.target.value)}
              />
            </Country>
            {isSucceed && <p>Dodałeś pracownika</p>}
            {button}
          </EmployeeAddWrapper>
        </FormWrapper>
      </div>
    </>
  );
}
export default BasicInformation;
