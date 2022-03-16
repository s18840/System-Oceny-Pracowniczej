import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormWrapper, InputField } from "../../styles/ProfilePageFormStyle";
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
  AcceptButton,
  PhoneNumber,
  Mail
} from "../../styles/ProfilePageStyle";
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
      PhoneNumber: "+48 506123412",
      Mail: "a.jarzab@gmail.com"
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
    console.log(data);
  };
  const { t } = useTranslation();
  const disabled = false;
  return (
    <>
      {dataJson.content.map((content) => (
            <FormWrapper onSubmit={handleSubmit(submitForm)}>
              <ProfileDetailedInfoWrapper>
                <PersonalDataHeadingText>
                  {t("Personal Data")}
                </PersonalDataHeadingText>
                <AddressHeadingText>{t("Address")}</AddressHeadingText>
                <FirstName>
                  <ProfileDataText>{t("First name")}</ProfileDataText>
                  <InputField
                    value={content.FirstName} disabled={true}
                    {...register("FirstName", { required: true })}
                  ></InputField>
                </FirstName>
                <SecondName>
                  <ProfileDataText>{t("Second name")}</ProfileDataText>
                  <InputField
                    value={content.SecondName} disabled={true}
                    {...register("SecondName", { required: true })}
                  ></InputField>
                </SecondName>
                <SurName>
                  <ProfileDataText>{t("Surname")}</ProfileDataText>
                  <InputField
                    value={content.Surname} disabled={true}
                    {...register("Surname", { required: true })}
                  ></InputField>
                </SurName>
                <FamilyName>
                  <ProfileDataText>{t("Family name")}</ProfileDataText>
                  <InputField
                    value={content.FamilyName} disabled={true}
                    {...register("FamilyName", { required: false })}
                  ></InputField>
                </FamilyName>
                <DateOfBirth>
                  <ProfileDataText>{t("Date of birth")}</ProfileDataText>
                  <InputField
                    value={content.DateOfBirth} disabled={true}
                    {...register("DateOfBirth", { required: true })}
                  ></InputField>
                </DateOfBirth>
                <PhoneNumber>
                  <ProfileDataText>{t("Phone Number")}</ProfileDataText>
                  <InputField
                    value={content.PhoneNumber} disabled={true}
                    {...register("PhoneNumber", { required: true })}
                  ></InputField>
                </PhoneNumber>
                <Mail>
                  <ProfileDataText>{t("Mail")}</ProfileDataText>
                  <InputField
                    value={content.Mail} disabled={true}
                    {...register("Mail", { required: true })}
                  ></InputField>
                </Mail>
                <Street>
                  <ProfileDataText>{t("Street")}</ProfileDataText>
                  <InputField
                    value={content.Street} disabled={true}
                    {...register("Street", { required: true })}
                  ></InputField>
                </Street>
                <HouseNumber>
                  <ProfileDataText>{t("House number")}</ProfileDataText>
                  <InputField
                    value={content.HouseNumber} disabled={true}
                    {...register("HouseNumber", { required: true })}
                  ></InputField>
                </HouseNumber>
                <City>
                  <ProfileDataText>{t("City")}</ProfileDataText>
                  <InputField
                    value={content.City} disabled={true}
                    {...register("City", { required: true })}
                  ></InputField>
                </City>
                <District>
                  <ProfileDataText>{t("District")}</ProfileDataText>
                  <InputField
                    value={content.District} disabled={true}
                    {...register("District", { required: true })}
                  ></InputField>
                </District>
                <PostalCode>
                  <ProfileDataText>{t("Postal code")}</ProfileDataText>
                  <InputField
                    value={content.PostalCode} disabled={true}
                    {...register("PostalCode", { required: true })}
                  ></InputField>
                </PostalCode>
                <Country>
                  <ProfileDataText>{t("Country")}</ProfileDataText>
                  <InputField
                    value={content.Country} disabled={true}
                    {...register("Country", { required: true })}
                  ></InputField>
                </Country>
                <FormButton onClick={() => console.log("tututu")}>
                  {t("Edit")}
                </FormButton>
              </ProfileDetailedInfoWrapper>
            </FormWrapper>

      ))}
    </>
  );
}
export default BasicInformation;
