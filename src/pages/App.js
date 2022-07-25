import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Dashboard from "./Dashboard";
import WelcomePage from "./WelcomePage";
import ProfilePage from "./ProfilePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Competences from "./Competences";
import NewCompetenceView from "./NewCompetenceView";
import Department from "./Department";
import NewDepartmentView from "./NewDepartmentView";
import Team from "./Team";
import NewTeamView from "./NewTeamView";
import Settings from "./Settings";
import Grades from "./Grades";
import NewEmpView from "./NewEmpView";
import EmployeeList from "./EmployeeList";
import Targets from "./Targets";
import { Context } from "./Context.js";
// import Jobs from "./Jobs";
// import NewJobView from "./NewJobsView";
import TeamDetails from "./TeamDetails";
function App() {
  //dodać sprawdzanie w session storage czy user jest, wtedy przy odswiezaniu nie bedzie znikac
  const [context, setContext] = useState("default context value");

  return (
    <Context.Provider value={[context, setContext]}>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={WelcomePage}>
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/welcome">
            <WelcomePage/>
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/Profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/Profile">
            <ProfilePage />
          </Route>
          <Route exact path="/Competences">
            <Competences/>
          </Route>
          <Route exact path="/newCompetence">
            <NewCompetenceView/>
          </Route>
          <Route exact path="/Departments">
            <Department />
          </Route>
          <Route exact path="/newDepartment">
            <NewDepartmentView />
          </Route>
          <Route exact path="/Teams">
            <Team />
          </Route>
          <Route exact path="/newTeam" >
            <NewTeamView />
          </Route>
          <Route exact path="/settings" component={Settings}>
            <Settings />
          </Route>
          <Route exact path="/grades" component={Grades}>
            <Grades />
          </Route>
          <Route exact path="/newEmp">
            <NewEmpView />
          </Route>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/targets">
            <Targets/>
          </Route>
//           <Route exact path="/Jobs">
//             <Jobs />
//           </Route>
//           <Route exact path="/newJob">
//             <NewJobView />
//           </Route>
          <Route exact path="/teamDetails">
            <TeamDetails />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
