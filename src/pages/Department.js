import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import DepartmentList from "../components/Department/DepartmentList";

function Department() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <DepartmentList/>
    </>

  );
}

export default Department;