import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import { PageWrapper, SubTitle, Title } from "../styles/GlobalStyle";
import Clock from "../components/Dashboard/Clock";
import {
  DashboardContentWrapper,
  DashboardWrapper,
} from "../styles/DashboardStyles";
import NextGrading from "../components/Dashboard/NextGrading";
import { useLocation } from "react-router-dom";
import { Context } from "../pages/Context";
import axios from "axios";
function Dashboard() {
  const [context] = useContext(Context);
  const location = useLocation();
  const [employee, setEmployee] = useState();
  const [firstName, setFirstName] = useState(" ");
  console.log(location);
  useEffect(() => {
    context &&
      axios
        .get(
          `https://localhost:5001/api/Dto/emp/${localStorage.getItem(
            "employeeId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setEmployee(data);
          setFirstName(data.firstName);
        });
  }, [context]);
  return (
    <>
      <Navbar />
      <Header />
      <PageWrapper>
        <DashboardWrapper>
          <DashboardContentWrapper>
            <Title>Hi, {firstName}</Title>
            <SubTitle>grading</SubTitle>
            <NextGrading />
            <SubTitle>your targets</SubTitle>
          </DashboardContentWrapper>
          <Clock />
        </DashboardWrapper>
      </PageWrapper>
    </>
  );
}

export default Dashboard;
