import React, {useContext, useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/Navigation/NavBar";
import Footer from "../../components/Footer/Footer";
import {
  AddTeamButton,
  ErrorsSpan,
  Heading,
  InsideWrapper,
  NewButton,
  PersonalDataHeadingText,
  ProfileDataText,
  RowLi,
  TableTeams,
  TeamsWrapper,
  Wrapper
} from "../../styles/GlobalStyle";
import {useForm} from "react-hook-form";
import {Context} from "../../pages/Context";
import {FormWrapper} from "../../styles/ProfilePageFormStyle";
import {log} from "loglevel";
import {get, put} from "../../Utils/APIUtils";

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddTeamButton
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
        setAdded((prev) => !prev);
      }}
      disabled={props.disabled}
      style={{backgroundColor: props.active ? "gray" : "#efaa8c"}}
    >
      {added ? props.radio ? "Remove" : "Added" : "Add"}
    </AddTeamButton>
  );
};

const AddEmployeeTeam = () => {
  const {
    handleSubmit,
  } = useForm();
  const submitForm = (data) => {
    if (choosenTeam === "" || choosenEmps.length === 0) return;
    const team = prepareTeam(data);
    put("Dto/teams/addEmployees", team)
      .catch(err => log.warn(err));
  };
  const [teams, setTeams] = useState([]);
  const [emps, setEmps] = useState([]);
  const [choosenTeam, setChoosenTeam] = useState("");
  const [choosenEmps, setChoosenEmps] = useState([]);
  const [context] = useContext(Context);
  const prepareTeam = () => {
    const obj = {
      teamId: choosenTeam,
      employeeIDs: choosenEmps,
    };

    return obj;
  };
  useEffect(() => {
    context && get("Employee/avaiEmps")
      .then(({data}) => {
        setEmps(data);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect(() => {
    context && get("Dto/teams")
      .then(({data}) => {
        setTeams(data);
      }).catch(err => log.warn(err));
  }, [context]);

  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <PersonalDataHeadingText>
          Add employees to team
          <NewButton
            type="submit"
            onClick={() => {
              window.location.href = "/Teams";
            }}
            disabled={(choosenEmps.length === 0 || choosenTeam === "")}
          >
            Create
          </NewButton>
          {(emps.length == 0) &&
          <ErrorsSpan font-size="20"
            style={{color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right"}}>Not
            possible to add to team</ErrorsSpan>}
          {(choosenEmps.length === 0 || choosenTeam === "") &&
          <ErrorsSpan font-size="20"
            style={{color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right"}}>Please
            provide all needed data</ErrorsSpan>}
        </PersonalDataHeadingText>
        <Wrapper>
          <InsideWrapper>
            <Heading>
              <ProfileDataText>Choose team: </ProfileDataText>
            </Heading>
            <TeamsWrapper style={{width: 580}}>
              <TableTeams className="table">
                {teams?.map((el) => (
                  <tr key={el.teamId}>
                    <td>
                      <RowLi>
                        {el.teamName}
                        <Button
                          onClick={() => {
                            setChoosenTeam(curr => curr !== el.teamId ? el.teamId : "");
                          }}
                          disabled={choosenTeam && choosenTeam !== el.teamId}
                          active={choosenTeam && choosenTeam !== el.teamId}
                          radio
                        />
                      </RowLi>
                    </td>
                  </tr>
                ))}
              </TableTeams>
            </TeamsWrapper>
            <Heading>
              <ProfileDataText>Add employees: </ProfileDataText>
            </Heading>
            <TeamsWrapper style={{width: 580}}>
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
                )) :
                  <RowLi>No available employees</RowLi>}
              </TableTeams>
            </TeamsWrapper>
          </InsideWrapper>
        </Wrapper>
      </FormWrapper>
    </>
  );
};

export default AddEmployeeTeam;
