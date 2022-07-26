import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import CompetenceList from "../components/Competences/CompetenceList";

function Competences() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <CompetenceList/>
    </>

  );
}

export default Competences;