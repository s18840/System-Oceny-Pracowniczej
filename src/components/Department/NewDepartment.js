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
import { log } from "loglevel";
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

const NewDepartment = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    if( choosenDirs === '') return;
    const department = prepareDepartment(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Department`, department, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ContentType: "application/json",
        },
      }).catch(err => log.warn(err));
  };
  const [dirs, setDirs] = useState([]);
  const [choosenDirs, setChoosenDirs] = useState('');
  const [context, setContext] = useContext(Context);
  const prepareDepartment = (e) => {
    const obj = {
      departmentId : 0,
      departmentName : e.name,
      directorId : choosenDirs,
    };
    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Employee/avaiDir`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setDirs(data);
        }).catch(err => log.warn(err));
  }, [context]);

  return (
    <FormWrapper onSubmit={handleSubmit(submitForm)}>
      <PersonalDataHeadingText>
        Creating new department
        <NewButton
          type="submit"
          onClick={() => {
            window.location.href = "/Departments";
          }}
          disabled={dirs.length == 0 || getValues("name") === ''}
        >
          Create
        </NewButton>
        {(dirs.length == 0) && 
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Not possible to add department</ErrorsSpan>
        }
        {(choosenDirs === '' || getValues("name") === '') &&
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
            <ProfileDataText>Add director: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {dirs.length > 0 ?dirs.map((el) => (
                <tr key={el.personalNumber}>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChoosenDirs(curr => curr !== el.personalNumber? el.personalNumber : '');
                        }}
                        disabled = {choosenDirs && choosenDirs !== el.personalNumber}
                        active={choosenDirs && choosenDirs !== el.personalNumber}
                        radio
                      />
                    </RowLi>
                  </td>
                </tr>
              )):<RowLi>No available directors</RowLi>}
            </TableTeams>
          </TeamsWrapper>
        </InsideWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

export default NewDepartment;
