import React from 'react';
import Navbar from '../components/Navigation/NavBar';
import Header from '../components/Header/Header';
import {PageWrapper, SubTitle, Title} from '../styles/GlobalStyle';
import Clock from '../components/Dashboard/Clock';
import {DashboardContentWrapper, DashboardWrapper} from "../styles/DashboardStyles";
import NextGrading from "../components/Dashboard/NextGrading";
import TargetList from "../components/Dashboard/TargetList";
import {useHistory, useLocation} from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Navbar/>
      <Header/>
      <PageWrapper>
        <DashboardWrapper>
          <DashboardContentWrapper>
            <Title>Witaj, Amadeusz</Title>
            <SubTitle>grading</SubTitle>
            <NextGrading/>
            <SubTitle>your targets</SubTitle>
            <TargetList/>
            <SubTitle>current projects</SubTitle>
          </DashboardContentWrapper>
          <Clock/>
        </DashboardWrapper>
      </PageWrapper>
    </>
  );

}

export default Dashboard;


