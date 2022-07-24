import React from "react";
import { Nav, NavLogo, NavMenu } from "./NavBarElements";
import { NavBarData } from "./NavBarData";
import SubMenu from "./SubMenu";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/dashboard">
        <img style={{ width: 300 }} src={require("../../assets/img/Logo420.png")} alt="Logo" />
      </NavLogo>

      <NavMenu>
        {NavBarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
