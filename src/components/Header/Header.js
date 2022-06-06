import React, { useEffect, useState } from "react";
import { FaPowerOff, FaWrench, FaSearch } from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import useApi from "../../api/useApi";

import {
  HeaderLocTree,
  HeaderProfile,
  HeaderSearch,
  HeaderProfilePhoto,
  HeaderWrapper,
  HeaderBtnProfileWrapper,
  HeaderBtnSignOut,
  HeaderBtnTol,
  HeaderSearchIcon,
  HeaderName,
} from './HeaderElements'

const dataJson = {
  content: [
    {
      FirstName: "Andrzej",
      Surname: "Jarząbkowski",
    },
  ],
};

const HeaderBar = () => {
  const history = useHistory();
  let empId =7;
  const { emp } = useApi(`https://localhost:5001/api/Dto/emp/${empId}`);
  console.log(emp)
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  
  useEffect (()=>{
    const timer = setTimeout(()=>{
      setFirstName(emp.firstName);
      setSurname(emp.lastName);
    },11);
    return () => clearTimeout(timer);
  },[emp])

  return(
  <HeaderWrapper>
    <HeaderBtnProfileWrapper>
      <HeaderBtnSignOut to="/welcome">
        <FaPowerOff />
      </HeaderBtnSignOut>
      <HeaderBtnTol to="/settings">  
        <FaWrench  />
      </HeaderBtnTol>
      <HeaderProfile activeStyle>
        <HeaderProfilePhoto to="/profile">
          <img src="prof.png" alt="" width="100%" />
        </HeaderProfilePhoto>
        <HeaderName to="/profile">{formFirstName + " " + formSurname}</HeaderName>
      </HeaderProfile>
    </HeaderBtnProfileWrapper>
    <HeaderSearch>
      <HeaderSearchIcon>
        <FaSearch />
      </HeaderSearchIcon>
    </HeaderSearch>
    <HeaderLocTree activeStyle>
    {history.location.pathname}
    </HeaderLocTree>
  </HeaderWrapper>
  )
}
export default HeaderBar
