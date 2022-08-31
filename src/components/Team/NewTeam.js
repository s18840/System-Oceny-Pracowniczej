import React, { useEffect, useState, useContext } from "react";
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
import { log } from "loglevel";
import { post, get } from "../../Utils/APIUtils";

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
      style={{backgroundColor: props.active ? "gray" : "#efaa8c"}}
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
  } = useForm();
  const submitForm = (data) => {
    if(choosenComps.length === 0 || choosenDeps === "" || choosenEmps.length === 0 || choosenMans === "") return;
    const team = prepareTeam(data);
    post("Dto/teams/add", team)
      .catch(err => log.warn(err));
  };
  const [comps, setComps] = useState([]);
  const [emps, setEmps] = useState([]);
  const [mans, setMans] = useState([]);
  const [deps, setDeps] = useState([]);
  const [choosenComps, setChoosenComps] = useState([]);
  const [choosenEmps, setChoosenEmps] = useState([]);
  const [choosenMans, setChoosenMans] = useState("");
  const [choosenDeps, setChoosenDeps] = useState("");
  const [context] = useContext(Context);
  const prepareTeam = (e) => {
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
    context && get("Employee/avaiMana")
      .then(({ data }) => {
        setMans(data);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect(() => {
    context && get("Employee/avaiEmps")
      .then(({ data }) => {
        setEmps(data);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect(() => {
    context && get("Competence")
      .then(({ data }) => {
        setComps(data);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect(() => {
    context && get("Department")
      .then(({ data }) => {
        setDeps(data);
      }).catch(err => log.warn(err));
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
          disabled={(choosenComps.length === 0 || choosenDeps === "" || choosenEmps.length === 0 || choosenMans === "" || getValues("name") === "")}
        >
          Create
        </NewButton>
        {(mans.length == 0 || emps.length == 0) && 
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Not possible to add team</ErrorsSpan>}
        {(choosenComps.length === 0 || choosenDeps === "" || choosenEmps.length === 0 || choosenMans === "" || getValues("name") === "") &&
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Please provide all needed data</ErrorsSpan>}
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
              <tbody>
                {deps?.map((el) => (
                  <tr key={el.departmentId}>
                    <td>
                      <RowLi>
                        {el.departmentName}
                        <Button
                          onClick={() => {
                            setChoosenDeps(curr => curr !== el.departmentId? el.departmentId : "");
                          }}
                          disabled = {choosenDeps && choosenDeps !== el.departmentId}
                          active={choosenDeps && choosenDeps !== el.departmentId}
                          radio
                        />
                      </RowLi>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>Add manager: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              <tbody>
                {mans.length > 0 ? mans.map((el) => (
                  <tr key={el.personalNumber}>
                    <td>
                      <RowLi>
                        {el.firstName + " " + el.lastName}
                        <Button
                          onClick={() => {
                            setChoosenMans(curr => curr !== el.personalNumber? el.personalNumber : "");
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
              </tbody>
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>Add Employees: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              <tbody>
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
              </tbody>
            </TableTeams>
          </TeamsWrapper>
          <Heading>
            <ProfileDataText>
              Add required competences: 
            </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              <tbody>
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
              </tbody>
            </TableTeams>
          </TeamsWrapper>
        </InsideWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

export default NewTeam;
