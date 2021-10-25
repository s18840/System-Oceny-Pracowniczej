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
  SideCategories,
  SideLink,
  SideLogo,
  SideMenu,
  SideIconHide
} from "./SideBarElements";

const Sidebar = () => {
  const [sideBar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sideBar);

  return (
    <Nav>
      <SideMenu sideBar={sideBar}>
        <SideLogo>
          <img src="Logo.png" alt="" />
        </SideLogo>
        <SideCategories></SideCategories>
        <SideCategories></SideCategories>

        <SideIconHide to='#'>
          <IOIcons.IoIosArrowDropleftCircle onClick={showSidebar}/>
        </SideIconHide>
        
        <SideCategories></SideCategories>
        <SideCategories></SideCategories>
        <SideCategories></SideCategories>
      </SideMenu>
      
    </Nav>
  );
};
export default Sidebar;
