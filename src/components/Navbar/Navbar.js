import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLocTree,
  NavProfile,
  NavSearch,
  NavProfilePhoto,
} from "./NavbarElements";

const NavBar = () => {
  return (
    <Nav>
      <NavLocTree to="/sciezka do miejsc" activeStyle>
        <text>Profile/Personal Information</text>
      </NavLocTree>
      <NavMenu>
        <NavLink to="/search" activeStyle>
          <NavSearch>
            <input size="50" type="text" placeholder="Search..." />
          </NavSearch>
          <FaSearch />
        </NavLink>
        <NavProfile to="/sciezka do miejsc" activeStyle>
          <NavProfilePhoto>
            <img src="prof.png" alt="" width="100%" />
          </NavProfilePhoto>
          <text>Amadeusz Jarząbkowski</text>
        </NavProfile>
        <NavBtn>
          <NavBtnLink to="/settings" activeStyle>
            <FaWrench />
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signout" activeStyle>
            <FaPowerOff />
          </NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};
export default NavBar;
