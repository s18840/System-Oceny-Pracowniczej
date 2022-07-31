import React, {useCallback, useState} from "react";
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
import Grades from "./Grades";
import NewEmpView from "./NewEmpView";
import EmployeeList from "./EmployeeList";
import UserTeam from "./UserTeam";
import Targets from "./Targets";
import { Context } from "./Context.js";
import Grade from "./Grade";
import Jobs from "./Jobs";
import DepartmentJobsList from "./DepartmentJobs";
import NewJobView from "./NewJobsView";
import TeamDetails from "./TeamDetails";
import AddEmployeeTeam from "../components/Team/AddEmployeeTeam";
function App() {
  const [context, setContext] = useState("default context value");

  const notAuthorized = <>
    <h1>
      Not authorized
    </h1>
  </>

  const notFound = <>
    <h1>
      Not Found
    </h1>
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
            <Redirect to="/Welcome" />
          </Route>
          <Route exact path="/Welcome">
            <WelcomePage/>
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/Profile/:id">
            <ProfilePage/>
          </Route>
          <Route path="/Profile">
            <ProfilePage/>
          </Route>
          <Route exact path="/Competences" render={()=>
            checkRoles("Manager", "HR", "Director", "Admin") ? <Competences/> : notAuthorized}/>
          <Route exact path="/newCompetence" render={()=>
            checkRoles("HR") ? <NewCompetenceView/> : notAuthorized}/>
          <Route exact path="/Departments" render={()=>
            checkRoles("HR", "Manager", "Director", "Admin") ? <Department/> : notAuthorized}/>
          <Route exact path="/newDepartment" render={()=>
            checkRoles("Admin") ? <NewDepartmentView/> : notAuthorized}/>
          <Route exact path="/Teams" render={()=>
            checkRoles("HR", "Manager", "Director", "Admin") ? <Team/> : notAuthorized}/>
          <Route exact path="/newTeam" render={()=>
            checkRoles("HR", "Director", "Admin") ? <NewTeamView/> : notAuthorized}/>
          <Route exact path="/grades" render={()=>
            checkRoles("Manager", "User", "HR") ? <Grades/> : notAuthorized}/>
          <Route exact path="/grades/:id" render={()=>
            checkRoles("HR", "Manager", "Director", "Admin") ? <Grades/> : notAuthorized}/>
          <Route exact path="/newEmp" render={()=>
            checkRoles("Admin") ? <NewEmpView/> : notAuthorized}/>
          <Route exact path="/employees">
            <EmployeeList/>
          </Route>
          <Route exact path="/grade/:id" render={()=>
            checkRoles("Manager", "HR") ? <Grade/> : notAuthorized}/>
          <Route exact path="/targets" render={()=>
            checkRoles("Manager", "HR", "User") ? <Targets/> : notAuthorized}/>
          <Route exact path="/targets/:id" render={()=>
            checkRoles("Manager", "HR", "Admin") ? <Targets/> : notAuthorized}/>
          <Route exact path="/Jobs" render={()=>
            checkRoles("HR", "Director", "Admin") ? <Jobs/> : notAuthorized}/>
          <Route exact path="/newJob" render={()=>
            checkRoles("HR", "Director", "Admin") ? <NewJobView/> : notAuthorized}/>
          <Route exact path="/teamDetails" render={()=>
            checkRoles("HR", "Director", "Admin") ? <TeamDetails/> : notAuthorized}/>
          <Route exact path="/DepartmentJobs" render={()=>
            checkRoles("Director") ? <DepartmentJobsList/> : notAuthorized}/>
          <Route exact path="/Team" render={()=>
            checkRoles("Manager", "User", "HR") ? <UserTeam/> : notAuthorized}/>
          <Route exact path="/AddEmployeTeam" render={()=>
            checkRoles("HR", "Admin") ? <AddEmployeeTeam/> : notAuthorized}/>
          <Route render={()=>notFound}/>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
