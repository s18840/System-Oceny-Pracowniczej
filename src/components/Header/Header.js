import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  HeaderLocTree,
  HeaderProfile,
  HeaderSearch,
  HeaderProfilePhoto,
  HeaderWrapper,
  HeaderBtnProfileWrapper,
  HeaderLocSearchWrapper,
  HeaderBtnSignOut,
  HeaderBtnTol,
} from "./HeaderElements";
import { useLocation } from "react-router";
const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const HeaderBar = () => {
  return (
    <HeaderWrapper>
      <HeaderBtnProfileWrapper>
        <HeaderBtnSignOut>
          <FaPowerOff />
        </HeaderBtnSignOut>
        <HeaderBtnTol>
          <FaWrench />
        </HeaderBtnTol>
        <HeaderProfile to="/sciezka do miejsc" activeStyle>
          <HeaderProfilePhoto>
            <img src="prof.png" alt="" width="100%" />
          </HeaderProfilePhoto>
          <text>Amadeusz Jarząbkowski</text>
        </HeaderProfile>
      </HeaderBtnProfileWrapper>

      <HeaderSearch>
        <FaSearch />
      </HeaderSearch>
      <HeaderLocTree to="/sciezka do miejsc" activeStyle>
        <text>Profile/Personal Info</text>
      </HeaderLocTree>
    </HeaderWrapper>
  );
};
export default HeaderBar;
