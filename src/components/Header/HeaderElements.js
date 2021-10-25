import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  left: 400px;
  max-height: 74.36px;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: #fff;
  border: 0.25px solid gray;
  font-size: 20px;
`;

export const HeaderBtnProfileWrapper = styled.div`
  display: flex;
  right: 0;
  top: 0;
  flex-direction: row-reverse;

  text-align: center;
`;

export const HeaderBtnTol = styled.div`
  padding: 22px;
  cursor: pointer;
  border: 0.25px solid gray;
  overflow: visible;
  &::hover {
    transition: all 0.2s ease-in-out;
    background: #15cd9c;
  }
`;
export const HeaderBtnSignOut = styled.div`
  color: #fb0d0d;
  padding: 22px;
  cursor: pointer;
  border: 0.25px solid gray;
  &::hover {
    transition: all 0.2s ease-in-out;
    background: #15cd9c;
  }
`;

export const HeaderLocTree = styled.div`
  padding: 25px;
  background-color: #6137a0;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
`;

export const HeaderProfile = styled.div`
  padding: 25px;
  background-color: #6137a0;
  display: flex;
  flex-direction: row;

  align-items: center;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
`;

export const HeaderSearch = styled.div`
  margin: 25px 0px;
  transform: scaleX(-1);
  width: 424px;
  max-height: 38px;
  max-width: 424px;
  border-radius: 45px;
  background-color: #15cd9c;
`;

export const HeaderProfilePhoto = styled.div`
  margin-right: 10px;
  min-width: 45px;
  min-height: 45px;
  max-height: 45px;
  max-width: 45px;
  border-radius: 100%;
  cursor: pointer;
`;
