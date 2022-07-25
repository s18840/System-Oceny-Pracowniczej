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
  NewButton,
  EditButton,
  AddTeamButton,
  TeamsWrapper,
  TableTeams
} from "../../styles/GlobalStyle";
import { TextField } from "../../styles/GlobalStyle";
import { useForm } from "react-hook-form";
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
  const [choosenComps, setChoosenComps] = useState([]);
  const [choosenEmps, setChoosenEmps] = useState([]);
  const [choosenMans, setChoosenMans] = useState();
  const [choosenDeps, setChoosenDeps] = useState();
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
      departmentId : choosenDeps,
      managerId : choosenMans,
      employeeIDS: choosenEmps,
      competenceIDS: choosenComps
    };
    console.log(obj)

    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get("https://localhost:5001/api/Employee/avaiMana", {
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
        .get("https://localhost:5001/api/Employee/avaiEmps", {
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
        .get("https://localhost:5001/api/Competence", {
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
      {console.log("Managerowie ", choosenMans, "Pracownicy", choosenEmps, "Kompetencje ",choosenComps, "Departament ",choosenDeps)}
      <PersonalDataHeadingText>
        Creating new team
        <NewButton
          onClick={() => {
            {console.log("Managerowie ", choosenMans, "Pracownicy", choosenEmps, "Kompetencje ",choosenComps, "Departament ",choosenDeps)}
            window.location.href = "/teamList";
          }}
        >
          Add
        </NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Name: </ProfileDataText>
            <InputField placeholder="ING Team" {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>Add Department: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {deps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.departmentName}
                      <Button
                        onClick={() => {
                          setChoosenDeps(el.departmentId);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>Add manager: </ProfileDataText>
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
                          setChoosenMans(el.personalNumber);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>Add Employees: </ProfileDataText>
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
                          setChoosenEmps((prev) => [...prev, el.personalNumber]);
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
              Add required competences: 
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
                          setChoosenComps((prev) => [...prev, el.competenceId]);
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
