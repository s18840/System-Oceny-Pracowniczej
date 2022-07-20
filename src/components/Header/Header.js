import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaPowerOff, FaWrench, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Context } from "../../pages/Context";
import {
  HeaderLocTree,
  HeaderProfile,
  HeaderSearch,
  HeaderProfilePhoto,
  HeaderWrapper,
  HeaderBtnProfileWrapper,
  HeaderBtnSignOut,
  HeaderBtnTol,
  HeaderSearchIcon,
  HeaderName,
} from "./HeaderElements";

const HeaderBar = () => {
  const [context] = useContext(Context);
  const history = useHistory();
  const [formFirstName, setFirstName] = useState(" ");
  const [formSurname, setSurname] = useState(" ");
  useEffect(() => {
    context &&
      axios
        .get(
          `https://localhost:5001/api/Dto/emp/${localStorage.getItem(
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
        <HeaderBtnTol to="/settings">
          <FaWrench />
        </HeaderBtnTol>
        <HeaderProfile activeStyle>
          <HeaderProfilePhoto to="/profile">
            <img src="prof.png" alt="" width="100%" />
          </HeaderProfilePhoto>
          <HeaderName to="/profile">
            {formFirstName + " " + formSurname}
          </HeaderName>
        </HeaderProfile>
      </HeaderBtnProfileWrapper>
      <HeaderSearch>
        <HeaderSearchIcon>
          <FaSearch />
        </HeaderSearchIcon>
      </HeaderSearch>
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
