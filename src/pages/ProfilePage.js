import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import {
ProfileWrapper
} from "../styles/ProfilePageStyle"

function App() {
  return (
    <Router>

      <NavBar />

<ProfileWrapper>
      <Header /> 
      <Footer />
</ProfileWrapper>

    </Router>
  );
}

export default App;
