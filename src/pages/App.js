import react from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from './WelcomePage'
import { GlobalStyle } from "../styles/GlobalStyle";

function App() {
  return (
      <Router>
        <GlobalStyle/>
          <Switch>
            <Route exact path = "/welcome">
              <WelcomePage/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
