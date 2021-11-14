import React from 'react'
import { FaPowerOff, FaWrench, FaSearch } from 'react-icons/fa'

import { useLocation } from 'react-router-dom'
import { NavLink } from '../../styles/ProfilePageStyle'
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
} from './HeaderElements'

// HeaderLocTree lokalizacja aktualna początek implementacji
const usePathname = () => {
  const location = useLocation()
  return location.pathname
}

const HeaderBar = () => (
  <HeaderWrapper>
    <HeaderBtnProfileWrapper>
      <HeaderBtnSignOut>
        <FaPowerOff />
      </HeaderBtnSignOut>
      <HeaderBtnTol>  
        <FaWrench  />
      </HeaderBtnTol>
      <HeaderProfile to="/sciezka do miejsc" activeStyle>
        <HeaderProfilePhoto>
          <img src="prof.png" alt="" width="100%" />
        </HeaderProfilePhoto>
        <text>Amadeusz Jarząbkowski</text>
      </HeaderProfile>
    </HeaderBtnProfileWrapper>

    <HeaderSearch>
      <HeaderSearchIcon>
        <FaSearch />
      </HeaderSearchIcon>
    </HeaderSearch>

    <HeaderLocTree to="/sciezka do miejsc" activeStyle>
      <text>Profile / PersonalInfo</text>
    </HeaderLocTree>
  </HeaderWrapper>
)
export default HeaderBar
