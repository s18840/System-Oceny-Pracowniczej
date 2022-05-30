import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Mail,
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
      Mail: "a.jarzab@gmail.com",
    },
  ],
};

function BasicInformation() {
  const [formState, setFormState] = useState(true);

  const switchForm = () => {
    setFormState(!formState);
  };

  const submitForm = (data) => {
    data.preventDefault()
    console.log(formData);
  };
  const { t } = useTranslation();
  let button;
  if (formState) {
    button=<FormButton onClick={switchForm}>{t("Edit")}</FormButton>;
  } else {
    button=<FormButton onClick={switchForm}>{t("Save")}</FormButton>;
  }

  const [formData, setFormData] = useState({
    FirstName: dataJson.content[0].FirstName,
    SecondName: dataJson.content[0].SecondName,
    Surname: dataJson.content[0].Surname,
    FamilyName: dataJson.content[0].FamilyName,
    DateOfBirth: dataJson.content[0].DateOfBirth,
    Street: dataJson.content[0].Street,
    HouseNumber: dataJson.content[0].HouseNumber,
    City: dataJson.content[0].City,
    District: dataJson.content[0].District,
    PostalCode: dataJson.content[0].PostalCode,
    Country: dataJson.content[0].Country,
    PhoneNumber: dataJson.content[0].PhoneNumber,
    Mail: dataJson.content[0].Mail,
  })
  return (
    <>
        <FormWrapper onSubmit={submitForm}>
          <ProfileDetailedInfoWrapper>
            <PersonalDataHeadingText>
              {t("Personal Data")}
            </PersonalDataHeadingText>
            <AddressHeadingText>{t("Address")}</AddressHeadingText>
            <FirstName>
              <ProfileDataText>{t("First name")}</ProfileDataText>
              <InputField
                value={formData.FirstName}
                onChange={(e) => setFormData({...formData, FirstName: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </FirstName>
            <SecondName>
              <ProfileDataText>{t("Second name")}</ProfileDataText>
              <InputField
                value={formData.SecondName}
                onChange={(e) => setFormData({...formData, SecondName: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </SecondName>
            <SurName>
              <ProfileDataText>{t("Surname")}</ProfileDataText>
              <InputField
                value={formData.Surname}
                onChange={(e) => setFormData({...formData, Surname: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </SurName>
            <FamilyName>
              <ProfileDataText>{t("Family name")}</ProfileDataText>
              <InputField
                value={formData.FamilyName}
                onChange={(e) => setFormData({...formData, FamilyName: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </FamilyName>
            <DateOfBirth>
              <ProfileDataText>{t("Date of birth")}</ProfileDataText>
              <InputField
                value={formData.DateOfBirth}
                onChange={(e) => setFormData({...formData, DateOfBirth: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </DateOfBirth>
            <PhoneNumber>
              <ProfileDataText>{t("Phone number")}</ProfileDataText>
              <InputField
                value={formData.PhoneNumber}
                onChange={(e) => setFormData({...formData, PhoneNumber: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </PhoneNumber>
            <Mail>
              <ProfileDataText>{t("Mail")}</ProfileDataText>
              <InputField
                value={formData.Mail}
                onChange={(e) => setFormData({...formData, Mail: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </Mail>
            <Street>
              <ProfileDataText>{t("Street")}</ProfileDataText>
              <InputField
                value={formData.Street}
                onChange={(e) => setFormData({...formData, Street: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </Street>
            <HouseNumber>
              <ProfileDataText>{t("House number")}</ProfileDataText>
              <InputField
                value={formData.HouseNumber}
                onChange={(e) => setFormData({...formData, HouseNumber: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </HouseNumber>
            <City>
              <ProfileDataText>{t("City")}</ProfileDataText>
              <InputField
                value={formData.City}
                onChange={(e) => setFormData({...formData, City: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </City>
            <District>
              <ProfileDataText>{t("District")}</ProfileDataText>
              <InputField
                value={formData.District}
                onChange={(e) => setFormData({...formData, District: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </District>
            <PostalCode>
              <ProfileDataText>{t("Postal code")}</ProfileDataText>
              <InputField
                value={formData.PostalCode}
                onChange={(e) => setFormData({...formData, PostalCode: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </PostalCode>
            <Country>
              <ProfileDataText>{t("Country")}</ProfileDataText>
              <InputField
                value={formData.Country}
                onChange={(e) => setFormData({...formData, Country: e.target.value})}
                disabled={formState}
                style={formState?{backgroundColor:"white"}:{backgroundColor:"#DDDDDD"}}
              ></InputField>
            </Country>
            {button}
          </ProfileDetailedInfoWrapper>
        </FormWrapper>
    </>
  );
}
export default BasicInformation;
