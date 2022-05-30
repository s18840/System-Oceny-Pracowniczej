import React , { useState } from 'react'
import { FaPowerOff, FaWrench, FaSearch } from 'react-icons/fa'
import { useHistory } from "react-router-dom";


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
  const [formData, setFormData] = useState({
    FirstName: dataJson.content[0].FirstName,
    Surname: dataJson.content[0].Surname,
  })
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
        <HeaderName to="/profile">{formData.FirstName + " " + formData.Surname}</HeaderName>
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
