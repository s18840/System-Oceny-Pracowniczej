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
import ProjectList from "../components/Project/ProjectList";
import Projects from "./Projects";
import CompetenceList from "../components/Competences/CompetenceList";
import Competences from "./Competences";
import NewCompetence from "../components/Competences/NewCompetence";
import NewCompetenceView from "./NewCompetenceView";
import DepartmentList from "../components/Department/DepartmentList";
import Department from "./Department";
import NewDepartment from "../components/Department/NewDepartment";
import NewDepartmentView from "./NewDepartmentView";
import TeamList from "../components/Team/TeamList";
import Team from "./Team";
import NewTeam from "../components/Team/NewTeam";
import NewTeamView from "./NewTeamView";
import Settings from "./Settings";
import Grades from "./Grades";
import NewEmpView from "./NewEmpView";
import EmployeeList from "./EmployeeList";
import Targets from "./Targets";
import { Context } from "./Context.js";
import Grade from "./Grade";
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
          <Route exact path="/welcome" component={WelcomePage}>
            <WelcomePage/>
          </Route>
          <Route exact path="/dashboard" component={Dashboard}>
            <Dashboard/>
          </Route>
          <Route exact path="/profile" component={ProfilePage}>
            <ProfilePage />
          </Route>
          <Route exact path="/projectList" component={ProjectList}>
            <Projects/>
          </Route>
          <Route exact path="/competenceList" component={CompetenceList}>
            <Competences/>
          </Route>
          <Route exact path="/newCompetence" component={NewCompetence}>
            <NewCompetenceView/>
          </Route>
          <Route exact path="/departmentList" component={DepartmentList}>
            <Department />
          </Route>
          <Route exact path="/newDepartment" component={NewDepartment}>
            <NewDepartmentView />
          </Route>
          <Route exact path="/teamList" component={TeamList}>
            <Team />
          </Route>
          <Route exact path="/newTeam" component={NewTeam}>
            <NewTeamView />
          </Route>
          <Route exact path="/settings" component={Settings}>
            <Settings />
          </Route>
          <Route exact path="/grades" component={Grades}>
            <Grades />
          </Route>
          <Route exact path="/newEmp" component={NewEmpView}>
            <NewEmpView />
          </Route>
          <Route exact path="/employees" component={EmployeeList}>
            <EmployeeList />
          </Route>
          <Route exact path="/grade/:id" component={Grade}>
            <Grade/>
          </Route>
          <Route exact path="/targets" component={Targets}>
            <Targets/>
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
