import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  HeaderLocTree,
  HeaderProfile,
  HeaderWrapper,
  HeaderBtnProfileWrapper,
  HeaderBtnSignOut,
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
