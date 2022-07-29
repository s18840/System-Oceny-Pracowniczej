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
  const [context] = useContext(Context);
  const history = useHistory();
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  const initials = (formFirstName[0]) + (formSurname[0]);
  useEffect(() => {
    context &&
      axios
        .get(
          `${process.env.REACT_APP_API_ADDRESS}Employee/${localStorage.getItem(
            "employeeId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setFirstName(data.firstName);
          setSurname(data.lastName);
        });
  }, [context]);

  let pathName = history.location.pathname;
  return (
    <HeaderWrapper>
      <HeaderBtnProfileWrapper>
        <HeaderBtnSignOut
          to="/welcome"
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
            {formFirstName + " " + formSurname}
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
