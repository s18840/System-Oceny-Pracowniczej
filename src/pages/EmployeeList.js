import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  TableInfo,
  Row,
  TableDetailsDate,
  TableDetails,
  PersonalDataHeadingText,
} from "../styles/GlobalStyle";
import {
  StatusIcon,
} from "../styles/ProfilePageStyle";
import { Context } from "./Context";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";

const dataJson = ["Name: ", "Personal number:", "Team number:", "Status: "];

function EmployeeList() {
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState();
  useEffect(() => {
    context &&
      axios
        .get("https://localhost:5001/api/Employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setEmployee(data);
          console.log(data);
        });
  }, [context]);
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <PersonalDataHeadingText>Employee List</PersonalDataHeadingText>
      <TableInfo className="table">
        <thead>
          <tr>
            {dataJson.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {employee?.map((content) => (
          <Row>
            <TableDetailsDate>{content.firstName + " " + content.lastName}</TableDetailsDate>
            <TableDetails>
              {content.personalNumber}
            </TableDetails>
            <TableDetails>
              {content.team_ID}
            </TableDetails>
            <TableDetails>
              <StatusIcon
                style={
                  content.status > 0
                    ? { backgroundColor: "#55ff11" }
                    : { backgroundColor: "#ff5511" }
                }
              />
            </TableDetails>
          </Row>
        ))}
      </TableInfo>
    </>
  );
}

export default EmployeeList;
