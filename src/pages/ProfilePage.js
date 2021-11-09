import React from "react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import ProfileInfo from "../components/ProfilePage/ProfileInfoDiv";
import BasicInformation from "../components/ProfilePage/BasicInformation";
import EmploymentInformation from "../components/ProfilePage/EmploymentInformation";
import EducationInformation from "../components/ProfilePage/EducationInformation";
//<BasicInformation /> podstawowe informacje o pracowniku
//<EmploymentInformation /> inforamcje o zatrudnieniu pracownika
function App() {
  return (
    <Router>
      
      <NavBar />
      <Header />
      <Footer />
      <ProfileInfo />
      <Switch>
      <Route path="/BasicInformation.js" exact component={BasicInformation} />
      <Route path="/EmploymentInformation.js" exact component={EmploymentInformation} />
      <Route path="/EducationInformation.js" exact component={EducationInformation} />
      </Switch>
    </Router>
  );
}

export default App;
