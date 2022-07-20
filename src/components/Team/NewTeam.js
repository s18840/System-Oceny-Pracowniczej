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
  AddButton,
} from "../../styles/GlobalStyle";
import { Context } from "../../pages/Context";

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddButton
      onClick={() => {
        props.onClick();
        setAdded((prev) => !prev);
      }}
      disabled={added ? true : false}
    >
      {added ? "Added" : "Add"}
    </AddButton>
  );
};

const NewCompetence = () => {

  const [comps, setComps] = useState([]);
  const [emps, setEmps] = useState([]);
  const [mans, setMans] = useState([]);
  const [chosenMan, setChosenMan] = useState([]);
  const [chosenEmp, setChosenEmp] = useState([]);
  const [chosenCom, setChosenCom] = useState([]);
  const [context] = useContext(Context);
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
  return (
    <>
      <PersonalDataHeadingText>
        Creating new team
        <NewButton
          onClick={() => {
            console.log("Managerowie ", chosenMan, "Pracownicy", chosenEmp, "Kompetencje ",chosenCom);
            //window.location.href = "/teamList";
          }}
        >
          Add
        </NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Name: </ProfileDataText>
            <InputField placeholder="np: ING Team"></InputField>
          </Heading>
          <Heading>
            <ProfileDataText>Add managers: </ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {mans?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChosenMan((prev) => [...prev, el.personalNumber]);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>Add employees: </ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {emps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.firstName + " " + el.lastName}
                      <Button
                        onClick={() => {
                          setChosenEmp((prev) => [...prev, el.personal_Number]);
                        }}
                      />
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>
              Add required competences:
            </ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {comps?.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.name}
                      <Button
                        onClick={() => {
                          setChosenCom((prev) => [...prev, el.competence_Id]);
                        }}
                      />
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
};

export default NewCompetence;
