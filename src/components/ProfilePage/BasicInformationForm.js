import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  AddressHeadingText,
  City,
  Country,
  DateOfBirth,
  District,
  FamilyName,
  FirstName,
  FormButton,
  HouseNumber,
  PersonalDataHeadingText,
  PostalCode,
  ProfileDataText,
  ProfileDetailedInfoWrapper,
  SecondName,
  Street,
  SurName,
} from "../../styles/ProfilePageStyle";
import { FormWrapper, InputField } from "../../styles/ProfilePageFormStyle";

const dataJson = {
  content: [
    {
      FirstName: "Andrzej",
      SecondName: "Artur",
      Surname: "Jarząbkowski",
      FamilyName: "-",
      DateOfBirth: "24.12.1991",
      Street: "Akacjowa",
      HouseNumber: "12",
      City: "Warszawa",
      District: "Mazowieckie",
      PostalCode: "01-100",
      Country: "Poland",
    },
  ],
};

function BasicInformation() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    history.push("/basicInformationForm");
  };
  return (
    <>
      {dataJson.content.map((content) => (
        <FormWrapper onSubmit={handleSubmit(submitForm)}>
          <ProfileDetailedInfoWrapper>
            <PersonalDataHeadingText>Personal Data</PersonalDataHeadingText>
            <AddressHeadingText>Address</AddressHeadingText>
            <FirstName>
              <ProfileDataText>First name:</ProfileDataText>
              <InputField
                placeholder={content.FirstName}
                {...register("FirstName", { required: true })}
              ></InputField>
            </FirstName>
            <SecondName>
              <ProfileDataText>Second name:</ProfileDataText>
              <InputField
                placeholder={content.SecondName}
                {...register("SecondName", { required: true })}
              ></InputField>
            </SecondName>
            <SurName>
              <ProfileDataText>Surname:</ProfileDataText>
              <InputField
                placeholder={content.Surname}
                {...register("Surname", { required: true })}
              ></InputField>
            </SurName>
            <FamilyName>
              <ProfileDataText>Family name:</ProfileDataText>
              <InputField
                placeholder={content.FamilyName}
                {...register("FamilyName", { required: false })}
              ></InputField>
            </FamilyName>
            <DateOfBirth>
              <ProfileDataText>Date of birth:</ProfileDataText>
              <InputField
                placeholder={content.DateOfBirth}
                {...register("DateOfBirth", { required: true })}
              ></InputField>
            </DateOfBirth>
            <Street>
              <ProfileDataText>Street:</ProfileDataText>
              <InputField
                placeholder={content.Street}
                {...register("Street", { required: true })}
              ></InputField>
            </Street>
            <HouseNumber>
              <ProfileDataText>HouseNumber:</ProfileDataText>
              <InputField
                placeholder={content.HouseNumber}
                {...register("HouseNumber", { required: true })}
              ></InputField>
            </HouseNumber>
            <City>
              <ProfileDataText>City:</ProfileDataText>
              <InputField
                placeholder={content.City}
                {...register("City", { required: true })}
              ></InputField>
            </City>
            <District>
              <ProfileDataText>District:</ProfileDataText>
              <InputField
                placeholder={content.District}
                {...register("District", { required: true })}
              ></InputField>
            </District>
            <PostalCode>
              <ProfileDataText>Postal code:</ProfileDataText>
              <InputField
                placeholder={content.PostalCode}
                {...register("PostalCode", { required: true })}
              ></InputField>
            </PostalCode>
            <Country>
              <ProfileDataText>Country:</ProfileDataText>
              <InputField
                placeholder={content.Country}
                {...register("Country", { required: true })}
              ></InputField>
            </Country>
            <FormButton type="submit">Edit</FormButton>
          </ProfileDetailedInfoWrapper>
        </FormWrapper>
      ))}
    </>
  );
}
export default BasicInformation;
