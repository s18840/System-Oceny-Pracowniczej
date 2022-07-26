import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import TeamList from "../components/Team/TeamList";

function Team() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Footer/>
      <TeamList/>
    </>

  );
}

export default Team;