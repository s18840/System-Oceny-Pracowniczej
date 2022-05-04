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
} from "../../styles/DepartmentStyle";
import {  
  NewButton,
  AddButton,
} from '../../styles/GlobalStyle';
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const dataJson = {
  content: [
    {
      team: "Team 1",
    },
    {
      team: "Team 2",
    },
    {
      team: "Team 3",
    },
    {
      team: "Team 4",
    },
    {
      team: "Team 5",
    },
    {
      team: "Team 6",
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
const dataJsonDir = {
  content: [
    {
      dir: "Wojciech Antczak",
    },
    {
      dir: "Joanna Bajko",
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
  const [marks, setMarks] = useState([]);
  const [emps, setEmps] = useState([]);
  const [dirs, setDirs] = useState([]);
  return (
    <>
      <PersonalDataHeadingText>
        {t("Creating new department")}
        <NewButton onClick={() => {alert(marks.toString()+"\n"+emps.toString()+"\n"+dirs.toString());window.location.href='/departmentList'}}>{t("Add")}</NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>{t("Name") + ": "}</ProfileDataText>
            <InputField placeholder="np: Departament Finansów"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{t("Add Directors") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {dataJsonDir.content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.dir}
                        <Button onClick={() => {setDirs((prev) => [...prev, el.dir])}}/> 
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
            <ProfileDataText>{t("Add Teams") + ": "}</ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {content.map((el) => (
                <tr>
                  <td>
                      <RowLi>
                        {el.team}
                        <Button onClick={() => {setMarks((prev) => [...prev, el.team])}}/> 
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