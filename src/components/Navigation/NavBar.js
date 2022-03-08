import React,{useState} from 'react'
import {Link} from 'react-router-dom'
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
  NavLogo,
  NavMenu,
} from './NavBarElements'
import {NavBarData} from './NavBarData'
import SubMenu from './SubMenu'



const Navbar = () => {

const [sidebar,setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

return (
  <Nav>
    <NavLogo>
      <img src="Logo420.png" alt="" />
    </NavLogo>

    <NavMenu>
      {NavBarData.map((item,index)=> {
        return<SubMenu item={item} key={index}/>;
      })}
    </NavMenu>
  </Nav>
)}
export default Navbar
