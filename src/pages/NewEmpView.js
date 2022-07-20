import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";

import EmployeeAddForm from "../components/EmployeeAdd/EmployeeAddForm";

function NewEmpView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <EmployeeAddForm />
    </>
  );
}

export default NewEmpView;
