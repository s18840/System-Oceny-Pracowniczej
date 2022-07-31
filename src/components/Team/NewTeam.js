import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  Wrapper,
  InsideWrapper,
  RowLi,
  NewButton,
  AddTeamButton,
  TeamsWrapper,
  TableTeams,
  ErrorsSpan
} from "../../styles/GlobalStyle";
import { useForm } from "react-hook-form";
import { Context } from "../../pages/Context";
import { FormWrapper } from "../../styles/ProfilePageFormStyle";

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddTeamButton
      onClick={(e) => {
      e.preventDefault();
      props.onClick();
      setAdded((prev) => !prev);
      }}
      disabled= {props.disabled}
      style={{backgroundColor: props.active ? 'gray' : '#efaa8c'}}
    >
      {added ? props.radio? "Remove" : "Added": "Add"}
    </AddTeamButton>
);
};

const NewTeam = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    if(choosenComps.length === 0 || choosenDeps === '' || choosenEmps.length === 0 || choosenMans === '') return;
    const team = prepareTeam(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Dto/teams/add`, team, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ContentType: "application/json",
        },
      })
  };
  const [comps, setComps] = useState([]);
  const [emps, setEmps] = useState([]);
  const [mans, setMans] = useState([]);
  const [deps, setDeps] = useState([]);
  const [choosenComps, setChoosenComps] = useState([]);
  const [choosenEmps, setChoosenEmps] = useState([]);
  const [choosenMans, setChoosenMans] = useState('');
  const [choosenDeps, setChoosenDeps] = useState('');
  const [abbreviation, setAbreviation] = useState("");
  const [context, setContext] = useContext(Context);
  const prepareTeam = (e) => {
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

    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Employee/avaiMana`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setMans(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Employee/avaiEmps`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setEmps(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Competence`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setComps(data);
        });
  }, [context]);
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Department`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setDeps(data);
        });
  }, [context]);
  
  return (
    <FormWrapper onSubmit={handleSubmit(submitForm)}>
      <PersonalDataHeadingText>
        Creating new team
        <NewButton
        type="submit"
          onClick={() => {
            window.location.href = "/Teams";
          }}
          disabled={(choosenComps.length === 0 || choosenDeps === '' || choosenEmps.length === 0 || choosenMans === '' || getValues("name") === '')}
        >
          Add
        </NewButton>
        {(mans.length == 0 || emps.length == 0) && 
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Not possible to add team</ErrorsSpan>
        }
        {(choosenComps.length === 0 || choosenDeps === '' || choosenEmps.length === 0 || choosenMans === '' || getValues("name") === '') &&
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Please provide all needed data</ErrorsSpan>
        }
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Name: </ProfileDataText>
            <InputField {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>Add Department: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {deps?.map((el) => (
                <tr key={el.departmentId}>
                  <td>
                    <RowLi>
                      {el.departmentName}
                      <Button
                        onClick={() => {
                          setChoosenDeps(curr => curr !== el.departmentId? el.departmentId : '');
                        }}
                        disabled = {choosenDeps && choosenDeps !== el.departmentId}
                        active={choosenDeps && choosenDeps !== el.departmentId}
                        radio
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
              {mans.length > 0 ? mans.map((el) => (
                <tr key={el.personalNumber}>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChoosenMans(curr => curr !== el.personalNumber? el.personalNumber : '');
                        }}
                        disabled = {choosenMans && choosenMans !== el.personalNumber}
                        active={choosenMans && choosenMans !== el.personalNumber}
                        radio
                      />
                    </RowLi>
                  </td>
                </tr>
              )):
              <RowLi>No available managers</RowLi>}
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>Add Employees: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {emps.length > 0 ? emps?.map((el) => (
                <tr key={el.personalNumber}>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChoosenEmps((prev) => prev.includes(el.personalNumber) ? prev.filter(item => item !== el.personalNumber) : [...prev, el.personalNumber]);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              )):
              <RowLi>No available employees</RowLi>}
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
                <tr key={el.competenceId}>
                  <td>
                    <RowLi>
                      {el.name}
                      <Button
                        onClick={() => {
                          setChoosenComps((prev) => prev.includes(el.competenceId)? prev.filter(item => item !== el.competenceId) : [...prev, el.competenceId]);
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
