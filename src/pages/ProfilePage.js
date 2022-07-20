import React from "react";
//import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import ProfileInfo from "../components/ProfilePage/ProfileInfoDiv";

function ProfilePage() {
  //const {id} = useParams();
  //console.log(id);
  return (
<>
      <NavBar/>
      <Header/>
      <Footer/>
      <ProfileInfo/>
</>

  );
}

export default ProfilePage;
