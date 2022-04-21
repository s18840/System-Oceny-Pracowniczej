import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import NewCompetence from "../components/Competences/NewCompetence";

function NewCompetenceView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <NewCompetence />
    </>
  );
}

export default NewCompetenceView;
