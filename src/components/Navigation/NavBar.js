import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; //grades
import { FaUsers } from "react-icons/fa"; //teams
import { FaRegUser } from "react-icons/fa"; //profile
import { FaRegObjectGroup } from "react-icons/fa"; //projects
import { FaIdCard } from "react-icons/fa"; //dashboard
import * as MDIcons from "react-icons/md";
import * as IOIcons from "react-icons/io";

import {
  Nav,
  NavCategories,
  NavLogo,
  NavMenu,
  NavIconHide,
} from "./NavBarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLogo>
          <img src="Logo.png" alt="" />
        </NavLogo>
        <NavCategories></NavCategories>
        <NavCategories></NavCategories>
        <NavCategories></NavCategories>
        <NavCategories></NavCategories>
        <NavCategories></NavCategories>
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
