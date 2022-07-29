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
import { Link } from "react-router-dom";

const dataJson = ["Name: ", "Personal number:", "Team number:", "Status: "];

function EmployeeList() {
  const [context] = useContext(Context);
  const [employee, setEmployee] = useState();
  useEffect(() => {
    context &&
      axios
        .get(`${process.env.REACT_APP_API_ADDRESS}Employee`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          setEmployee(data);
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
            <TableDetailsDate>
              <Link to={`/profile/${content.personalNumber}`} style={{  
                fontSize: "25px",
                fontWeight: "bold",
                color: "#ff4e01",
                textDecoration: "none"}}>
                {content.firstName + " " + content.lastName}
              </Link>
            </TableDetailsDate>
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
