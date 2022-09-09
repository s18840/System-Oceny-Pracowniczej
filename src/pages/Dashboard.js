import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import {PageWrapper, SubTitle, Title} from "../styles/GlobalStyle";
import Clock from "../components/Dashboard/Clock";
import {
  DashboardContentWrapper,
  DashboardWrapper,
} from "../styles/DashboardStyles";
import NextGrading from "../components/Dashboard/NextGrading";
import {useLocation} from "react-router-dom";
import ModalLogin from "../components/ModalLogin";
import { Context } from "../pages/Context";
import { log } from "loglevel";
import { get } from "../Utils/APIUtils"
function Dashboard() {
  const [status,setStatus] = useState(" ");
  const [openModal,setOpenModal] = useState(false);
  const location = useLocation();
  const [context] = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    context && get(`Dto/emp/${localStorage.getItem("employeeId")}`)
      .then(({ data }) => {
        setStatus(data.status);
        setLoading(false);
      }).catch(err => log.warn(err));
  }, [context]);
  useEffect (()=>{
    setOpenModal(status == 0);
  },[status])
  const firstName = localStorage.getItem("fullName").split(" ")[0];
  if(loading){
    return(<></>)
  }
  return (
    <>
      <Navbar/>
      <Header/>
      <PageWrapper>
        <DashboardWrapper>
          <DashboardContentWrapper>
            <Title>Hi, {firstName}</Title>
            <SubTitle>grading</SubTitle>
            <NextGrading/>
          </DashboardContentWrapper>
          <Clock/>
        </DashboardWrapper>
      </PageWrapper>
      {location.pathname=="/Dashboard" && openModal && <ModalLogin closeModal={setOpenModal} emp={localStorage.getItem("employeeId")}
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }} />}
    </>
  );
}

export default Dashboard;
