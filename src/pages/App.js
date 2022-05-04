import React from 'react';
import {GlobalStyle} from '../styles/GlobalStyle';
import Dashboard from './Dashboard';
import WelcomePage from './WelcomePage';
import ProfilePage from "./ProfilePage";
import BasicInformationForm from "../components/ProfilePage/BasicInformationForm"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ProjectList from '../components/Project/ProjectList';
import Projects from './Projects';
import CompetenceList from '../components/Competences/CompetenceList';
import Competences from './Competences';
import NewCompetence from '../components/Competences/NewCompetence';
import NewCompetenceView from './NewCompetenceView';
import DepartmentList from '../components/Department/DepartmentList';
import Department from './Department';
import NewDepartment from '../components/Department/NewDepartment';
import NewDepartmentView from './NewDepartmentView';
import TeamList from '../components/Team/TeamList';
import Team from './Team';
import NewTeam from '../components/Team/NewTeam';
import NewTeamView from './NewTeamView';

function App() {
  return (
    <>
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
            <ProfilePage/>
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
            <Department/>
          </Route>
          <Route exact path="/newDepartment" component={NewDepartment}>
            <NewDepartmentView/>
          </Route>
          <Route exact path="/teamList" component={TeamList}>
            <Team/>
          </Route>
          <Route exact path="/newTeam" component={NewTeam}>
            <NewTeamView/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
