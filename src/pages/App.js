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


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/welcome">
            <WelcomePage/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/profile">
            <ProfilePage/>
          </Route>
          
          <Route exact path="/basicInformationForm">
            <BasicInformationForm/>
          </Route>
          <Route exact path="/projectList">
            <Projects/>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
