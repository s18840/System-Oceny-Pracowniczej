import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./components/Navbar/SideBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Sidebar />
  </Router>
  );
}

export default App;
