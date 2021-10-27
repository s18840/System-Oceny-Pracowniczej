import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa' // grades
import { FaUsers } from 'react-icons/fa' // teams
import { FaRegUser } from 'react-icons/fa' // profile
import { FaRegObjectGroup } from 'react-icons/fa' // projects
import { FaIdCard } from 'react-icons/fa' // dashboard
import * as MDIcons from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io' // dropdown

import {
  Nav,
  NavCategories,
  NavLogo,
  NavMenu,
  NavCategoriesText,
  NavBtnDropdown,
  NavCategoriesWrapper,
  NavLink,
} from './NavBarElements'

const Navbar = () => (
  <Nav>
    <NavMenu>
      <NavLogo>
        <NavLink to="/home">
          <img src="Logo420.png" alt="" />
        </NavLink>
      </NavLogo>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaIdCard />
          <NavLink to="/dashboard">
            <NavCategoriesText>Dashboard</NavCategoriesText>
          </NavLink>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaRegUser />
          <NavLink to="/profile">
            <NavCategoriesText>Profile</NavCategoriesText>
          </NavLink>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaUsers />
          <NavLink to="/teams">
            <NavCategoriesText>Teams</NavCategoriesText>
          </NavLink>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaRegObjectGroup />
          <NavLink to="/projects">
            <NavCategoriesText>Projects</NavCategoriesText>
          </NavLink>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaStar />
          <NavLink to="/grades">
            <NavCategoriesText>Grades</NavCategoriesText>
          </NavLink>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>
    </NavMenu>
  </Nav>
)
export default Navbar
