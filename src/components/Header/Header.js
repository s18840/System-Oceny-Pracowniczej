import React from 'react'
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



const HeaderBar = () => {
  const history = useHistory();
  return(
  <HeaderWrapper>
    <HeaderBtnProfileWrapper>
      <HeaderBtnSignOut to="/welcome">
        <FaPowerOff />
      </HeaderBtnSignOut>
      <HeaderBtnTol>  
        <FaWrench  />
      </HeaderBtnTol>
      <HeaderProfile activeStyle>
        <HeaderProfilePhoto to="/profile">
          <img src="prof.png" alt="" width="100%" />
        </HeaderProfilePhoto>
        <HeaderName to="/profile">Amadeusz Jarząbkowski</HeaderName>
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
