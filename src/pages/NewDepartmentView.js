import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import NewDepartment from "../components/Department/NewDepartment";

function NewDepartmentView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <NewDepartment />
    </>
  );
}

export default NewDepartmentView;