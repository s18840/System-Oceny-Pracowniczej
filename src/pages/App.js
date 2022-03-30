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
          <Route exact path="/basicInformationForm" component={BasicInformationForm}>
            <BasicInformationForm/>
          </Route>
          <Route exact path="/projectList" component={ProjectList}>
            <Projects/>
          </Route>       
        </Switch>
      </Router>
    </>
  );
}

export default App;
