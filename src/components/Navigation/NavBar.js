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
          <img src="Logo420.png" alt="" />
      </NavLogo>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaIdCard />
            <NavCategoriesText>Dashboard</NavCategoriesText>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaRegUser />
            <NavCategoriesText>Profile</NavCategoriesText>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaUsers />
            <NavCategoriesText>Teams</NavCategoriesText>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaRegObjectGroup />
            <NavCategoriesText>Projects</NavCategoriesText>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>

      <NavCategories>
        <NavCategoriesWrapper>
          <FaStar />
            <NavCategoriesText>Grades</NavCategoriesText>
        </NavCategoriesWrapper>
        <NavBtnDropdown>
          <IoIosArrowDown />
        </NavBtnDropdown>
      </NavCategories>
    </NavMenu>
  </Nav>
)
export default Navbar
