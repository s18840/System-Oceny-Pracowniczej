import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  display: flex;
  position: fixed;
  width: 1520px;
  height: 74.36px;
  justify-content: center;
  font-size: 20px;
  right: 0;
  top: 0;
  border: 0.25px solid gray;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 0 31rem;
  cursor: pointer;
  margin-right: -5rem;
  &.active {
    color: #6137a0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -500px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px 20px;
  color: white;
  border: 0.25px solid gray;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &::hover {
    transition: all 0.2s ease-in-out;
    background: #15cd9c;
  }
`;

export const NavBtnLink = styled(Link)`
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &::hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLocTree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #6137a0;
  width: 400px;
  height: 74.36px;
  margin-right: 7rem;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
`;

export const NavProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #6137a0;
  width: 300px;
  height: 74.36px;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  justify-content: space-evenly;
  margin-left: -25rem;
  margin-right: 1rem;
`;

export const NavSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10rem;
  margin-right: 0.5rem;
`;

export const NavProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33a13d;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  justify-content: space-evenly;
  cursor: pointer;
`;
