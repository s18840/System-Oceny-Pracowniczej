import React from 'react';
import Navbar from '../components/Navigation/NavBar';
import Header from '../components/Header/Header';
import {PageWrapper} from '../styles/GlobalStyle';
import Clock from '../components/Dashboard/Clock';

function Dashboard() {

  return (
    <>
      <Navbar/>
      <Header/>
      <PageWrapper>
        <Clock/>
      </PageWrapper>
    </>
  );

}

export default Dashboard;


