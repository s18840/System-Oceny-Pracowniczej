import React, { useState, useCallback } from "react";
import { SidebarLabel, SidebarLink, DropdownLink } from "./NavBarElements";
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const checkRoles = useCallback((acceptedRoles)=>{
    let isAuthorized = false;
    const userRoles = localStorage.getItem("roles").split(",")
    userRoles.forEach((value)=> {
      if (acceptedRoles.includes(value)) {
        isAuthorized = true
      }
    })
    return isAuthorized
  }, [])

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subnav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subnav && checkRoles(item.subnav.role)
            ? item.iconClosed
            : item.subnav
              ? null 
              : item.subnav}
        </div>
      </SidebarLink>
      {subnav && item.subnav && 
        checkRoles(item.subnav.role) ? (
          <DropdownLink to={item.subnav.path} >
            <SidebarLabel>{item.subnav.title}</SidebarLabel>
          </DropdownLink>
        ) : null}
    </>
  );
};
export default SubMenu;
