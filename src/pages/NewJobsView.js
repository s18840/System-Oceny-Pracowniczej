import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import NewJob from "../components/Job/NewJob";

function NewJobView() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
      <NewJob />
    </>
  );
}

export default NewJobView;
