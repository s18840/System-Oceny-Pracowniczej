import React, { useState } from "react";
import { Nav, NavLogo, NavMenu } from "./NavBarElements";
import { NavBarData } from "./NavBarData";
import SubMenu from "./SubMenu";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Nav>
      <NavLogo to="/dashboard">
        <img style={{ width: 300 }} src="Logo420.png" alt="" />
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
