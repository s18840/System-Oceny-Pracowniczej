import React, { useState } from "react";
import {  
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  Wrapper,
  MarkersWrapper,
  InsideWrapper,
  TableMarkers,
  RowLi,
  DescriptionField,
  NewButton,
  EditButton,
  AddButton,
} from '../../styles/GlobalStyle';
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const dataJson = {
  content: [
    {
      competenceName: "Competence 1",
    },
    {
      competenceName: "Competence 2",
    },
    {
      competenceName: "Competence 3",
    },
    {
      competenceName: "Competence 4",
    },
    {
      competenceName: "Competence 5",
    },
    {
      competenceName: "Competence 6",
    },
  ],
};
const dataJsonEmp = {
  content: [
    {
      emp: "Andrzej Kowalski",
    },
    {
      emp: "Antek Król",
    },
    {
      emp: "Anna Zbojna",
    },
    {
      emp: "Andrzej Kowalski",
    },
    {
      emp: "Antek Król",
    },
    {
      emp: "Anna Zbojna",
    },
  ],
};
const dataJsonMan = {
  content: [
    {
      man: "Wojciech Antczak",
    },
    {
      man: "Joanna Bajko",
    },


  ],
};

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddButton
      onClick={() => {
        props.onClick();
        setAdded((prev) => !prev);
      }}
    >
      {added ? "Added" : "Add"}
    </AddButton>
  );
};

const NewCompetence = (props)=> {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };
  const { content } = dataJson;
  const [comps, setComps] = useState([]);
  const [emps, setEmps] = useState([]);
  const [mans, setMans] = useState([]);
  return (
    <>
      <PersonalDataHeadingText>
        {t("Creating new team")}
        <NewButton onClick={() => {alert(comps.toString()+"\n"+emps.toString()+"\n"+mans.toString());window.location.href='/teamList'}}>{t("Add")}</NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>{t("Name") + ": "}</ProfileDataText>
            <InputField placeholder="np: ING Team"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Add managers") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {dataJsonMan.content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.man}
                        <Button onClick={() => {setMans((prev) => [...prev, el.man])}}/> 
                      </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>{t("Add Employees") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {dataJsonEmp.content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.emp}
                        <Button onClick={() => {setEmps((prev) => [...prev, el.emp])}}/> 
                      </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>{t("Add required competences") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.competenceName}
                        <Button onClick={() => {setComps((prev) => [...prev, el.competenceName])}}/> 
                      </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
        </InsideWrapper>
      </Wrapper>

    </>
  );
}

export default NewCompetence;