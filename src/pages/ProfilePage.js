import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import ProfileInfo from "../components/ProfilePage/ProfileInfoDiv";
import BasicInformation from "../components/ProfilePage/BasicInformation";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <Footer />
      <ProfileInfo />
      <BasicInformation />
    </Router>
  );
}

export default App;
