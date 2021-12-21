import React from "react";
import {useTranslation} from 'react-i18next';
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
  FormButton
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
    },
  ],
};

function BasicInformation() {
  const {t} = useTranslation();
  return (
  <>
    {dataJson.content.map((content) => (
      <ProfileDetailedInfoWrapper>
        <PersonalDataHeadingText>{t('Personal Data')}</PersonalDataHeadingText>
        <AddressHeadingText>{t('Address')}</AddressHeadingText>

        <FirstName>
          <ProfileDataText>{t('First name')}</ProfileDataText>{content.FirstName}
        </FirstName>
        <SecondName>
          <ProfileDataText>{t('Second name')}</ProfileDataText>{content.SecondName}
        </SecondName>
        <SurName>
          <ProfileDataText>{t('Surname')}</ProfileDataText>{content.Surname}
        </SurName>
        <FamilyName>
          <ProfileDataText>{t('Family name')}</ProfileDataText>{content.FamilyName}
        </FamilyName>
        <DateOfBirth>
          <ProfileDataText>{t('Date of birth')}</ProfileDataText>{content.DateOfBirth}
        </DateOfBirth>
        <Street>
          <ProfileDataText>{t('Street')}</ProfileDataText>{content.Street}
        </Street>
        <HouseNumber>
          <ProfileDataText>{t('House number')}</ProfileDataText>{content.HouseNumber}
        </HouseNumber>
        <City>
          <ProfileDataText>{t('City')}</ProfileDataText>{content.City}
        </City>
        <District>
          <ProfileDataText>{t('District')}</ProfileDataText>{content.District}
        </District>
        <PostalCode>
          <ProfileDataText>{t('Postal code')}</ProfileDataText>{content.PostalCode}
        </PostalCode>
        <Country>
          <ProfileDataText>{t('Country')}</ProfileDataText>{content.Country}
        </Country>
        <FormButton type="submit">{t('Edit')}</FormButton>
      </ProfileDetailedInfoWrapper>
    ))}
  </>
  )};
export default BasicInformation;
