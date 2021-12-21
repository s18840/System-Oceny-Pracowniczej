import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    history.push("/basicInformationForm");
    console.log(data)
  };
  return (
    <>
      {dataJson.content.map((content) => (
        <FormWrapper onSubmit={handleSubmit(submitForm)}>
          <ProfileDetailedInfoWrapper>
            <PersonalDataHeadingText>{t('Personal Data')}</PersonalDataHeadingText>
            <AddressHeadingText>{t('Address')}</AddressHeadingText>
            <FirstName>
              <ProfileDataText>{t('First name')}</ProfileDataText>
              <InputField
                placeholder={content.FirstName}
                {...register("FirstName", { required: true })}
              ></InputField>
            </FirstName>
            <SecondName>
              <ProfileDataText>{t('Second name')}</ProfileDataText>
              <InputField
                placeholder={content.SecondName}
                {...register("SecondName", { required: true })}
              ></InputField>
            </SecondName>
            <SurName>
              <ProfileDataText>{t('Surname')}</ProfileDataText>
              <InputField
                placeholder={content.Surname}
                {...register("Surname", { required: true })}
              ></InputField>
            </SurName>
            <FamilyName>
              <ProfileDataText>{t('Family name')}</ProfileDataText>
              <InputField
                placeholder={content.FamilyName}
                {...register("FamilyName", { required: false })}
              ></InputField>
            </FamilyName>
            <DateOfBirth>
              <ProfileDataText>{t('Date of birth')}</ProfileDataText>
              <InputField
                placeholder={content.DateOfBirth}
                {...register("DateOfBirth", { required: true })}
              ></InputField>
            </DateOfBirth>
            <Street>
              <ProfileDataText>{t('Street')}</ProfileDataText>
              <InputField
                placeholder={content.Street}
                {...register("Street", { required: true })}
              ></InputField>
            </Street>
            <HouseNumber>
              <ProfileDataText>{t('House number')}</ProfileDataText>
              <InputField
                placeholder={content.HouseNumber}
                {...register("HouseNumber", { required: true })}
              ></InputField>
            </HouseNumber>
            <City>
              <ProfileDataText>{t('City')}</ProfileDataText>
              <InputField
                placeholder={content.City}
                {...register("City", { required: true })}
              ></InputField>
            </City>
            <District>
              <ProfileDataText>{t('District')}</ProfileDataText>
              <InputField
                placeholder={content.District}
                {...register("District", { required: true })}
              ></InputField>
            </District>
            <PostalCode>
              <ProfileDataText>{t('Postal code')}</ProfileDataText>
              <InputField
                placeholder={content.PostalCode}
                {...register("PostalCode", { required: true })}
              ></InputField>
            </PostalCode>
            <Country>
              <ProfileDataText>{t('Country')}</ProfileDataText>
              <InputField
                placeholder={content.Country}
                {...register("Country", { required: true })}
              ></InputField>
            </Country>
            <FormButton onClick={()=>console.log('tututu')}>{t('Edit')}</FormButton>
          </ProfileDetailedInfoWrapper>
        </FormWrapper>
      ))}
    </>
  );
}
export default BasicInformation;
