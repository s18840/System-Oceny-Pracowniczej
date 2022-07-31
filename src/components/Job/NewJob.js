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

const NewJob = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    if( choosenDeps.length == 0) return;
    const job = prepareJob(data);
    axios.post(`${process.env.REACT_APP_API_ADDRESS}Dto/jobs/add`, job, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ContentType: "application/json",
      },
    })
  };
  const [deps, setDeps] = useState([]);
  const [choosenDeps, setChoosenDeps] = useState([]);
  const [context] = useContext(Context);
  const prepareJob = (e) => {
    const obj = {
      jobID : 0,
      name : e.name,
      departmentIDs : choosenDeps,
    };

    return obj;
  };
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
        Creating new job
        <NewButton
          type="submit"
          onClick={() => {
            window.location.href = "/Jobs";
          }}
          disabled={choosenDeps.length == 0 || getValues("name") === ''}
        >
          Add
        </NewButton>
        {(choosenDeps.length == 0 || getValues("name") === '') &&
        <ErrorsSpan font-size="20" style={{ color: "red", marginTop: 10, marginRight: 20, position: "unset", float: "right" }}>Please provide all needed data</ErrorsSpan>
        }
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Job name: </ProfileDataText>
            <InputField placeholder="Junior Developer" {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>
              Add job to departments: 
            </ProfileDataText>
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
                          setChoosenDeps((prev) => prev.includes(el.departmentId) ? prev.filter(item => item !== el.departmentId) : [...prev, el.departmentId]);
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

export default NewJob;
