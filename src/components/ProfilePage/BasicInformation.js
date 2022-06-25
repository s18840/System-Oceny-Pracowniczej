import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { FormWrapper} from "../../styles/ProfilePageFormStyle";
import {InputField, Span} from '../../styles/GlobalStyle'
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
import { Context } from '../../pages/Context';

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
  useEffect (()=>{
    context && axios.get(`https://localhost:5001/api/Dto/emp/${localStorage.getItem("employeeId")}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }}).then(({data}) => 
    {setEmployee(data); 
    setValue("firstName",data.firstName,{shouldValidate: true});
    setValue("secondName",data.secondName ? data.secondName : "-",{shouldValidate: true});
    setValue("lastName",data.lastName,{shouldValidate: true});
    setValue("birthDate",data?.birthDate.split('T')[0]?data?.birthDate.split('T')[0] :'',{shouldValidate: true});
    setValue("street",data.street,{shouldValidate: true});
    setValue("buildingNumber",data.buildingNumber,{shouldValidate: true});
    setValue("apartmentNumber",data.apartmentNumber ? data.apartmentNumber : "-",{shouldValidate: true});
    setValue("city",data.city,{shouldValidate: true});
    setValue("postalCode",data.postalCode,{shouldValidate: true});
    setValue("country",data.country,{shouldValidate: true});
    setValue("cellPhoneNumber",data.cellPhoneNumber,{shouldValidate: true});
    setValue("companyMail",data.companyMail ? data.companyMail : "-",{shouldValidate: true});
    });
  },[context]);

  // useEffect (()=>{
  //   const timer = setTimeout(()=>{
  //     setValue("firstName",emp.firstName,{shouldValidate: true});
  //     setValue("secondName",emp.secondName ? emp.secondName : "-",{shouldValidate: true});
  //     setValue("lastName",emp.lastName,{shouldValidate: true});
  //     setValue("birthDate",emp?.birthDate.split('T')[0]?emp?.birthDate.split('T')[0] :'',{shouldValidate: true});
  //     setValue("street",emp.street,{shouldValidate: true});
  //     setValue("buildingNumber",emp.buildingNumber,{shouldValidate: true});
  //     setValue("apartmentNumber",emp.apartmentNumber ? emp.apartmentNumber : "-",{shouldValidate: true});
  //     setValue("city",emp.city,{shouldValidate: true});
  //     setValue("postalCode",emp.postalCode,{shouldValidate: true});
  //     setValue("country",emp.country,{shouldValidate: true});
  //     setValue("cellPhoneNumber",emp.cellPhoneNumber,{shouldValidate: true});
  //     setValue("companyMail",emp.companyMail ? emp.companyMail : "-",{shouldValidate: true});
  //     //setEmail("email",emp.email);
  //   },11);
  //   return () => clearTimeout(timer);
  // },[emp])

  const {register,handleSubmit,setValue, formState: { errors,isValid }} = useForm({mode: 'onChange'});
  const [formReady, setFormReady] = useState(false);

  const switchForm = () => {
    //console.log(formReady,isValid)
    setFormReady((currentFormReady)=>(!(currentFormReady && isValid)));
  };

  const prepareUser = () => {
    const obj = {
      firstName: firstName,
      secondName: secondName,
      lastName: lastName,
      birthDate: birthDate,
      street: street,
      buildingNumber: buildingNumber,
      apartmentNumber: apartmentNumber,
      city: city,
      postalCode: postalCode,
      country: country,
      cellPhoneNumber: cellPhoneNumber,
      companyMail: companyMail,
      //email: email
    };

    return obj;
  };
  const submitForm = (data) => {

     if (!formReady) {
      console.log(data);
    //   //TUTAJ BĘDZIE AXIOS.PUT
     }
  };

  let button;

  button = (<FormButton onClick={switchForm}>{!formReady ? "Edit" : "Save"}</FormButton>);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <ProfileDetailedInfoWrapper>
          <PersonalDataHeadingText>{"Personal Data"}</PersonalDataHeadingText>
          <AddressHeadingText>{"Address"}</AddressHeadingText>
          <FirstName>
            <ProfileDataText>{"First name"}</ProfileDataText>
            <InputField
              {...register("firstName", ({required: true}))}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            />
            {errors.username && errors.username.type === "required" && <Span style={{color:"red"}}>{'REQUIRED'}</Span>}
          </FirstName>
          <SecondName>
            <ProfileDataText>{"Second name"}</ProfileDataText>
            <InputField
              {...register("secondName", ({required: true}))}
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
              {...register("lastName", ({required: true}))}
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
              type="date"
              {...register("birthDate", ({required: true}))}
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
            type="number"
              {...register("cellPhoneNumber", ({required: true}))}
              disabled={!formReady}
              style={
                !formReady
                  ? {"-webkit-appearance": "none", backgroundColor: "white" }
                  : {"-webkit-appearance": "none", backgroundColor: "#DDDDDD" }
              }
            ></InputField>
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
          <ProfileDataText>{"Company Mail"}</ProfileDataText>
            <InputField
              {...register("companyMail", ({required: true}))}
              disabled={!formReady}
              style={
                !formReady
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#DDDDDD" }
              }
            ></InputField>
          </CompanyMail>
          <Street>
            <ProfileDataText>{"Street"}</ProfileDataText>
            <InputField
              {...register("street", ({required: true}))}
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
              {...register("buildingNumber", ({required: true}))}
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
              {...register("city", ({required: true}))}
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
                {...register("apartmentNumber", ({required: true}))}
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
              {...register("postalCode", ({required: true}))}
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
              {...register("country", ({required: true}))}
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
