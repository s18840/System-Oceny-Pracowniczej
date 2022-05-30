import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import NewRole from "../components/Role/NewRole";

function NewRoleView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <NewRole />
    </>
  );
}

export default NewRoleView;
