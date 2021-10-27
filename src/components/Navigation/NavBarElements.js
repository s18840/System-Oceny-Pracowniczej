import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: linear-gradient(#6137a0, #54318a, #311c50);
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100%;
  font-size: 20px;
  top: 0;
  left: 0;
  
`;

export const NavLogo = styled.div`
  justify-content: center;
  border-radius: 100%;
  margin-block-start: -50px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 400px;
  height: 46px;
  margin-block-start: -32px;
  margin-block-end: 64px;
`;
export const NavCategoriesWrapper = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const NavCategoriesText = styled.div`
  margin-left: 15px;
  color: #ffffff;
`;

export const NavBtnDropdown = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1241f1;
  }
`;
