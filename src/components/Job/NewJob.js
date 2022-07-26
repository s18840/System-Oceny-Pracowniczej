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
  TableTeams
} from "../../styles/GlobalStyle";
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

const NewJob = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
    const job = prepareJob(data);
    console.log(job)
    axios.post(`https://localhost:5001/api/Dto/jobs/add`, job, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  };
  const [deps, setDeps] = useState([]);
  const [choosenDeps, setChoosenDeps] = useState([]);
  const [context] = useContext(Context);
  const prepareJob = (e) => {
    console.log(e.jobName)
    const obj = {
      jobID : 0,
      name : e.name,
      departmentIDs : choosenDeps,
    };
    console.log(obj)

    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get("https://localhost:5001/api/Department", {
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
      {console.log("Departament ",choosenDeps)}
      <PersonalDataHeadingText>
        Creating new job
        <NewButton
          onClick={() => {
            {console.log("Departament ",choosenDeps)}
            //window.location.href = "/teamList";
          }}
        >
          Add
        </NewButton>
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
                <tr>
                  <td>
                    <RowLi>
                      {el.departmentName}
                      <Button
                        onClick={() => {
                          setChoosenDeps((prev) => [...prev, el.departmentId]);
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
