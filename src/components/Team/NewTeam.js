import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
  AddTeamButton,
  TeamsWrapper,
  TableTeams
} from "../../styles/GlobalStyle";
import { TextField } from "../../styles/GlobalStyle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import useApi from "../../api/useApi";
import { Context } from "../../pages/Context";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddTeamButton
      onClick={() => {
        props.onClick();
        setAdded((prev) => !prev);
      }}
      disabled={added ? true : false}
    >
      {added ? "Added" : "Add"}
    </AddTeamButton>
  );
};

const NewTeam = (props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
    const team = prepareTeam(data);
    axios.post(`https://localhost:5001/api/Dto/teams/add`, team, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  };
  const [comps, setComps] = useState([]);
  const [emps, setEmps] = useState([]);
  const [mans, setMans] = useState([]);
  const [deps, setDeps] = useState([]);
  const [comps1, setComps1] = useState([]);
  const [emps1, setEmps1] = useState([]);
  const [mans1, setMans1] = useState();
  const [deps1, setDeps1] = useState();
  const [abbreviation, setAbreviation] = useState("");
  const [context, setContext] = useContext(Context);
  //setAbreviation(e.name.subString(0,2))
  const prepareTeam = (e) => {
    console.log(e.name)
    setAbreviation(e.name.substring(0,2));
    const obj = {
      teamId : 0,
      name : e.name,
      abbreviation : e.name.substring(0,2),
      departmentId : deps1,
      managerId : mans1,
      employeeIDS: emps1,
      competenceIDS: comps1
    };
    console.log(obj)

    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get(`https://localhost:5001/api/Employee/avaiMana`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setMans(data);
          console.log(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`https://localhost:5001/api/Employee/avaiEmps`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setEmps(data);
          console.log(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`https://localhost:5001/api/Competence`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setComps(data);
          console.log(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`https://localhost:5001/api/Department`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setDeps(data);
          console.log(data);
        });
  }, [context]);

  return (
    <FormWrapper onSubmit={handleSubmit(submitForm)}>
      {console.log("Managerowie ", mans1, "Pracownicy", emps1, "Kompetencje ",comps1, "Departament ",deps1)}
      <PersonalDataHeadingText>
        {t("Creating new team")}
        <NewButton
          onClick={() => {
            {console.log("Managerowie ", mans1, "Pracownicy", emps1, "Kompetencje ",comps1, "Departament ",deps1)}
            //window.location.href = "/teamList";
          }}
        >
          {"Add"}
        </NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>{"Name" + ": "}</ProfileDataText>
            <InputField placeholder="ING Team" {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>{"Add Department" + ": "}</ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {deps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.name}
                      <Button
                        onClick={() => {
                          setDeps1(el.departmentId);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>{"Add manager" + ": "}</ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {mans.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setMans1(el.personalNumber);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>{"Add Employees" + ": "}</ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {emps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setEmps1((prev) => [...prev, el.personalNumber]);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>
              {"Add required competences" + ": "}
            </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {comps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.name}
                      <Button
                        onClick={() => {
                          setComps1((prev) => [...prev, el.competenceId]);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
        </InsideWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

export default NewTeam;
