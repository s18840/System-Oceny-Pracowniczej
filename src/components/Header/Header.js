import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaPowerOff, FaWrench, FaSearch } from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import useApi from "../../api/useApi";
import { Context } from '../../pages/Context';
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
  const [context, setContext] = useContext(Context);
  const history = useHistory();
  const [employee, setEmployee] = useState();
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  useEffect (()=>{
    context && axios.get(`https://localhost:5001/api/Dto/emp/${context.employeeId}`, {headers: {Authorization: `Bearer ${context.token}` }}).then(({data}) => {setEmployee(data); setFirstName(data.firstName);
    setSurname(data.lastName);});
  },[context]);

  // useEffect (()=>{
  //   const timer = setTimeout(()=>{
  //     setFirstName(employee.firstName);
  //     setSurname(employee.lastName);
  //   },11);
  //   return () => clearTimeout(timer);
  // },[employee])

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
