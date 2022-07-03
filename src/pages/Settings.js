import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";

function Settings() {
  return (
<>
      <NavBar/>
      <Header/>
      <Footer/>
      <div
    style={{
      display: 'flex',
      height: '100px',
      marginLeft: '500px',
      marginTop: '100px'
    }}
  >
    <h1>Settings</h1>
  </div>
</>

  );
}

export default Settings;