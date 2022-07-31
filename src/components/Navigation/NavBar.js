import React, { useCallback } from "react";
import { Nav, NavLogo, NavMenu } from "./NavBarElements";
import { NavBarData } from "./NavBarData";
import SubMenu from "./SubMenu";

const Navbar = () => {

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
    <Nav>
      <NavLogo to="/dashboard">
        <img style={{ width: 300 }} src={require("../../assets/img/Logo420.png")} alt="Logo" />
      </NavLogo>

      <NavMenu>
        {NavBarData.map((item, index) => {
          return  item.role === "all" ||
          checkRoles(item.role) ?
            <SubMenu item={item} key={index} />
            : null;
        })}
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
