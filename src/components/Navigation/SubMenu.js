import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarLabel, SidebarLink, DropdownLink } from "./NavBarElements";
const SubMenu = ({ item }) => {
    const [subnav, setSubnav ] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subnav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subnav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subnav.map((item,index) => {
          return(
              <DropdownLink to ={item.path} key={index}>
                  {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
          )
      }
      )}
    </>
  );
};
export default SubMenu;
