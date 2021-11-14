import React from "react";
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
} from "../../styles/ProfilePageStyle";
const BasicInformation = () => (
      <ProfileDetailedInfoWrapper>
      <PersonalDataHeadingText>Personal Data</PersonalDataHeadingText>
      <AddressHeadingText>Address</AddressHeadingText>
      <FirstName>
        <ProfileDataText>First name:</ProfileDataText>Andrzej
      </FirstName>
      <SecondName>
        <ProfileDataText>Second name:</ProfileDataText>Kowalski
      </SecondName>
      <SurName>
        <ProfileDataText>Surname:</ProfileDataText>Jarząbkowski
      </SurName>
      <FamilyName>
        <ProfileDataText>Family name:</ProfileDataText>-
      </FamilyName>
      <DateOfBirth>
        <ProfileDataText>Date of birth:</ProfileDataText>24.12.1998
      </DateOfBirth>
      <Street>
        <ProfileDataText>Street:</ProfileDataText>Akacjowa
      </Street>
      <HouseNumber>
        <ProfileDataText>HouseNumber:</ProfileDataText>12
      </HouseNumber>
      <City>
        <ProfileDataText>City:</ProfileDataText>Warszawa
      </City>
      <District>
        <ProfileDataText>District:</ProfileDataText>Mazowieckie
      </District>
      <PostalCode>
        <ProfileDataText>Postal code:</ProfileDataText>01-100
      </PostalCode>
      <Country>
        <ProfileDataText>Country:</ProfileDataText>Poland
      </Country>
    </ProfileDetailedInfoWrapper>
)
export default BasicInformation