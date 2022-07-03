import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import NewTeam from "../components/Team/NewTeam";

function NewTeamView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <NewTeam />
    </>
  );
}

export default NewTeamView;
