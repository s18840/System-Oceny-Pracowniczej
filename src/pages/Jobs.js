import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import JobList from "../components/Job/JobList";

function Jobs() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <JobList/>
    </>

  );
}

export default Jobs;