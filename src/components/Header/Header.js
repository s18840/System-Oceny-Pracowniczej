import React from 'react'
import { FaPowerOff, FaWrench, FaSearch } from 'react-icons/fa'
import { createBrowserHistory } from "history";


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

const history = createBrowserHistory()
const HeaderBar = () => (
  
  <HeaderWrapper>
    <HeaderBtnProfileWrapper>
      <HeaderBtnSignOut to="/welcome">
        <FaPowerOff />
      </HeaderBtnSignOut>
      <HeaderBtnTol>  
        <FaWrench  />
      </HeaderBtnTol>
      <HeaderProfile to="/sciezka do miejsc" activeStyle>
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

    <HeaderLocTree to="/sciezka do miejsc" activeStyle>
      {history.location.pathname}
    </HeaderLocTree>
  </HeaderWrapper>
)
export default HeaderBar
