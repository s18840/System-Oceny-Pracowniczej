import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaPowerOff, FaWrench } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Context } from "../../pages/Context";
import {
  HeaderLocTree,
  HeaderProfile,
  HeaderWrapper,
  HeaderBtnProfileWrapper,
  HeaderBtnSignOut,
  HeaderBtnTol,
  HeaderName,
  HeaderAvatar
} from "./HeaderElements";

const HeaderBar = () => {
  const history = useHistory();
  const fullName = localStorage.getItem("fullName")
  const initials = (fullName.split(" ")[0][0]) + (fullName.split(" ")[1][0]);

  let pathName = history.location.pathname;
  return (
    <HeaderWrapper>
      <HeaderBtnProfileWrapper>
        <HeaderBtnSignOut
          to="/Welcome"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <FaPowerOff />
        </HeaderBtnSignOut>
        <HeaderProfile activeStyle>
          <HeaderAvatar to="/profile">
            {initials}
          </HeaderAvatar>
          <HeaderName to="/profile">
            {fullName}
          </HeaderName>
        </HeaderProfile>
      </HeaderBtnProfileWrapper>
      <HeaderLocTree activeStyle>
        {
          (pathName.substring(0).charAt(1).toUpperCase() +
            pathName.substring(2))
        }
      </HeaderLocTree>
    </HeaderWrapper>
  );
};
export default HeaderBar;
