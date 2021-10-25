import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-image: linear-gradient(
    to bottom,
    #6137a0,
    #5e369c,
    #5c3597,
    #593493,
    #57338f,
    #533188,
    #4f2e82,
    #4b2c7b,
    #442870,
    #3e2465,
    #37205a,
    #311c50
  );
  display: flex;
  position: fixed;
  justify-content: center;
  width: 400px;
  height: 1080px;
  font-size: 20px;
  top: 0;
  left: 0;
`;

export const SideLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
  border-radius: 100%;
  margin-block-start: -30px;
`;

export const SideMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #522D8A;
  width: 400px;
  height: 46px;
  justify-content: space-evenly;
  margin-block-start: -32px;
  margin-block-end: 64px;
`;

export const SideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #ffff;
  cursor: pointer;
  &.active {
    color: #6137a0;
  }
`;

export const SideIconHide = styled(Link)`
  display: flex;
  position: relative;
  left: 200px;
  color: #ea6e38;
  background: #3d098a;
  border: 1;
  border-color: ea6e38;
  transform: scale(2);
  border-radius: 50%;
  margin-block-start: -20px;
  z-index: 5;
`;
