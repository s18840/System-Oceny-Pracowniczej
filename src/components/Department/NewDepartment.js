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
    const department = prepareDepartment(data);
    axios.post(`https://localhost:5001/api/Department`, department, 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  };
  const [dirs, setDirs] = useState([]);
  const [choosenDirs, setChoosenDirs] = useState();
  const [context, setContext] = useContext(Context);
  const prepareDepartment = (e) => {
    const obj = {
      departmentId : 0,
      name : e.name,
      directorId : choosenDirs,
    };
    console.log(obj)

    return obj;
  };
  useEffect(() => {
    context &&
      axios
        .get("https://localhost:5001/api/Employee/avaiDir", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setDirs(data);
          console.log(data);
        });
  }, [context]);

  return (
    <FormWrapper onSubmit={handleSubmit(submitForm)}>
      <PersonalDataHeadingText>
        Creating new department
        <NewButton
          onClick={() => {
            window.location.href = "/Departments";
          }}
        >
          Add
        </NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Name: </ProfileDataText>
            <InputField placeholder="Accounting" {...register("name", { required: true })}></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>Add director: </ProfileDataText>
          </Heading>
          <TeamsWrapper>
            <TableTeams className="table">
              {dirs.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChoosenDirs(el.personalNumber);
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
