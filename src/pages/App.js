import react from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from './WelcomePage'

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path = "/welcome">
              <WelcomePage/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
