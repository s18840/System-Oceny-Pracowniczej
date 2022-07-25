import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import DepartmentJobsList from "../components/Job/DepartmentJobsList";

function Jobs() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <DepartmentJobsList/>
    </>

  );
}

export default Jobs;