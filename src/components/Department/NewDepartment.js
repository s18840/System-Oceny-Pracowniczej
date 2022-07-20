import React, { useState } from "react";
import {
  Heading,
  PersonalDataHeadingText,
  ProfileDataText,
  InputField,
  Wrapper,
  MarkersWrapper,
  MarkersSmallWrapper,
  InsideWrapper,
  TableMarkers,
  RowLi,
  NewButton,
  AddButton,
} from "../../styles/GlobalStyle";

const dataJson = {
  content: [
    {
      team: "Team 1",
    },
    {
      team: "Team 2",
    },
    {
      team: "Team 3",
    },
    {
      team: "Team 4",
    },
    {
      team: "Team 5",
    },
    {
      team: "Team 6",
    },
  ],
};

const dataJsonDir = {
  content: [
    {
      dir: "Wojciech Antczak",
    },
    {
      dir: "Joanna Bajko",
    },
  ],
};

const Button = (props) => {
  const [added, setAdded] = useState(false);
  return (
    <AddButton
      onClick={() => {
        props.onClick();
        setAdded((prev) => !prev);
      }}
    >
      {added ? "Added" : "Add"}
    </AddButton>
  );
};

const NewCompetence = () => {

  const { content } = dataJson;
  const [marks, setMarks] = useState([]);
  const [dirs, setDirs] = useState([]);
  return (
    <>
      <PersonalDataHeadingText>
        Creating new department
        <NewButton onClick={() => {alert(marks.toString()+"\n"+dirs.toString());window.location.href="/departmentList"}}>Add</NewButton>
      </PersonalDataHeadingText>
      <Wrapper>
        <InsideWrapper>
          <Heading>
            <ProfileDataText>Name: </ProfileDataText>
            <InputField placeholder="np: Departament Finansów"/>
          </Heading>
          <Heading>
            <ProfileDataText>Add Directors: </ProfileDataText>
          </Heading>
          <MarkersWrapper>
            <TableMarkers className="table">
              {dataJsonDir.content.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.dir}
                      <Button onClick={() => {setDirs((prev) => [...prev, el.dir])}}/>
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersWrapper>
          <Heading>
            <ProfileDataText>Add Teams: </ProfileDataText>
          </Heading>
          <MarkersSmallWrapper>
            <TableMarkers className="table">
              {content.map((el) => (
                <tr>
                  <td>
                    <RowLi>
                      {el.team}
                      <Button onClick={() => {setMarks((prev) => [...prev, el.team])}}/>
                    </RowLi>
                  </td>
                </tr>
              ))}
            </TableMarkers>
          </MarkersSmallWrapper>
        </InsideWrapper>
      </Wrapper>

    </>
  );
}

export default NewCompetence;
