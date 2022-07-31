import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";
import { InputField, ErrorsSpan } from "../../styles/GlobalStyle";
import {
  City,
  Country,
  DateOfBirth,
  District,
  FirstName,
  HouseNumber,
  PersonalDataHeadingText,
  PostalCode,
  ProfileDataText,
  SecondName,
  Street,
  SurName,
  PhoneNumber,
  CompanyMail,
  AddButton
} from "../../styles/ProfilePageStyle";
import { Context } from "../../pages/Context";
import { EmployeeAddWrapper } from "../../styles/FormEmpStyles";
import moment from 'moment';
import { log } from "loglevel";
function EmployeeAddForm() {
  const [context] = useContext(Context);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });


  const [isSucceed, setIsSucceed] = useState(false);
  const prepareUser = (e) => {
    const obj = {
      firstName: e.firstName,
      secondName: e.secondName,
      lastName: e.lastName,
      birthDate: e.birthDate,
      cellPhoneNumber: e.cellPhoneNumber,
      email: e.email,
      companyEmail: e.email,
      country: e.country,
      city: e.city,
      street: e.street,
      buildingNumber: e.buildingNumber,
      apartmentNumber: e.apartmentNumber,
      postalCode: e.postalCode,
      stationaryPhoneNumber: "12345"
    };
    return obj;
  };
  const submitForm = (data) => {
    if (isValid) {
      const employeeReady = prepareUser(data);
      context && axios.post(`${process.env.REACT_APP_API_ADDRESS}Dto/addEmp`, employeeReady,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ContentType: "application/json",
        },
      }).then((resp) => {
        setIsSucceed(true);
        clearForm();
        setTimeout(() => {
          setIsSucceed(false);
        }, 3000);
      })
      .catch(err => log.warn(err));
    }
  };
  const clearForm = () => {
    setValue("firstName"," ");
    setValue("secondName"," ");
    setValue("lastName"," ");
    setValue("birthDate"," ");
    setValue("cellPhoneNumber"," ");
    setValue("email"," ");
    setValue("street"," ");
    setValue("buildingNumber"," ");
    setValue("city"," ");
    setValue("apartmentNumber"," ");
    setValue("postalCode"," ");
    setValue("country"," ");
  };

  const dateNow = moment(moment.now()).format('YYYY-MM-DD');
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "500px",
          marginLeft: "600px",
          marginTop: "100px",
          paddingBottom: "40px"
        }}
      >
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <EmployeeAddWrapper>
          <PersonalDataHeadingText>
            Create New Employee
          </PersonalDataHeadingText>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.firstName.message}</ErrorsSpan>
            )}
            {errors.firstName && errors.firstName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.firstName.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.secondName && errors.secondName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.secondName.message}</ErrorsSpan>
            )}
            {errors.secondName && errors.secondName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.secondName.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {errors.lastName && errors.lastName.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.lastName.message}</ErrorsSpan>
            )}
            {errors.lastName && errors.lastName.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.lastName.message}</ErrorsSpan>
            )}
          </SurName>
          <DateOfBirth>
            <ProfileDataText>Date of birth</ProfileDataText>
            <InputField
              type="date"
              {...register("birthDate", {
                required: "Required",
                validate: {
                  over18: value => moment(value, "YYYY-MM-DD").diff(dateNow, 'years', true)<-18,
                }
               })}
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.birthDate && errors.birthDate.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.birthDate.message}</ErrorsSpan>
            )}
            {errors.birthDate && errors.birthDate.type !== "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>Employee must be over 18</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
            )}
            {errors.cellPhoneNumber && errors.cellPhoneNumber.type === "minLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.cellPhoneNumber.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.email && errors.email.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.email.message}</ErrorsSpan>
            )}
            {errors.email && errors.email.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.email.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.street && errors.street.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.street.message}</ErrorsSpan>
            )}
            {errors.street && errors.street.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.street.message}</ErrorsSpan>
            )}
            {errors.street && errors.street.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.street.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.buildingNumber && errors.buildingNumber.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {errors.buildingNumber && errors.buildingNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.buildingNumber.message}</ErrorsSpan>
            )}
            {errors.buildingNumber && errors.buildingNumber.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.buildingNumber.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.city && errors.city.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.city.message}</ErrorsSpan>
            )}
            {errors.city && errors.city.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.city.message}</ErrorsSpan>
            )}
            {errors.city && errors.city.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.city.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.apartmentNumber && errors.apartmentNumber.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.apartmentNumber.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.postalCode && errors.postalCode.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {errors.postalCode && errors.postalCode.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.postalCode.message}</ErrorsSpan>
            )}
            {errors.postalCode && errors.postalCode.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.postalCode.message}</ErrorsSpan>
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
              style={{ backgroundColor: "#DDDDDD" }}
            />
            {errors.country && errors.country.type === "required" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.country.message}</ErrorsSpan>
            )}
            {errors.country && errors.country.type === "maxLength" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.country.message}</ErrorsSpan>
            )}
            {errors.country && errors.country.type === "pattern" && (
              <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginLeft: 20 }}>{errors.country.message}</ErrorsSpan>
            )}
          </Country>
          {isSucceed && <p>You have added a user</p>}
          <AddButton type="submit" value="Add"/>
        </EmployeeAddWrapper>
      </FormWrapper>
      </div>
    </>
  );
}
export default EmployeeAddForm;
