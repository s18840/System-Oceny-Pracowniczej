import React, {useCallback, useState} from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Dashboard from "./Dashboard";
import WelcomePage from "./WelcomePage";
import ProfilePage from "./ProfilePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch, useHistory,
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
import Grade from "./Grade";
import Jobs from "./Jobs";
import DepartmentJobsList from "./DepartmentJobs";
import NewJobView from "./NewJobsView";
import TeamDetails from "./TeamDetails";
import YourTeam from "../components/Team/YourTeam";
function App() {
  //dodać sprawdzanie w session storage czy user jest, wtedy przy odswiezaniu nie bedzie znikac
  const [context, setContext] = useState("default context value");
  const history = useHistory()

  const notAuthorized = <>
    <h1>
      Not authorized
    </h1>
    <button onClick={() => history.push('/dashboard')}>dashboard</button>
    </>

  const checkRoles = useCallback((...acceptedRoles)=>{
    let isAuthorized = false;
    const userRoles = localStorage.getItem("roles").split(",")
    userRoles.forEach((value)=> {
      if (acceptedRoles.includes(value)) {
        isAuthorized = true
      }
    })
    return isAuthorized
  }, [])

  return (
    <Context.Provider value={[context, setContext]}>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/newTeam">
            <NewTeamView />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/grades">
            <Grades />
          </Route>
          <Route exact path="/grades/:id">
            <Grades />
          </Route>
          <Route exact path="/newEmp">
            <NewEmpView />
          </Route>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/grade/:id" render={()=>
            checkRoles("Manager", "HR") ? <Grade/> : notAuthorized
          }/>
          <Route exact path="/targets">
            <Targets/>
          </Route>
           <Route exact path="/Jobs">
             <Jobs />
           </Route>
           <Route exact path="/newJob">
             <NewJobView />
           </Route>
          <Route exact path="/teamDetails">
            <TeamDetails />
          </Route>
          {/*For Director job lists */}
          <Route exact path="/DepartmentJobs">
            <DepartmentJobsList />
          </Route>
          <Route exact path="/YourTeam">
            <YourTeam />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
