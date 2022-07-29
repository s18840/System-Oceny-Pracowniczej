import React from "react";
import {
  FaIdCard,
  FaRegObjectGroup,
  FaRegUser,
  FaStar,
  FaUsers,
} from "react-icons/fa"; // dashboard // projects // profile // grades // teams
import * as MDIcons from "react-icons/md";


export const NavBarData = [{
  title: "Dashboard",
  path: "/Dashboard",
  icon: < FaIdCard/>,
  iconClosed: < MDIcons.MdKeyboardArrowDown/>,
  iconOpened: < MDIcons.MdKeyboardArrowUp/>,
},
  {
    title: "Profile",
    path: "/Profile",
    icon: < FaRegUser/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
    subnav:
      {
        title: "Create new employee",
        path: "/newEmp",
        role: "Admin",
      },
  },
  {
    title: "Teams",
    path: "/Teams",
    icon: < FaUsers/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
    subnav: [{
      title: "Your team",
      path: "/YourTeam",
      role: "Manager",
    }],
  },
  {
    title: "Employees",
    path: "/Employees",
    icon: < FaUsers/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
  },
  {
    title: "Departments",
    path: "/Departments",
    icon: < FaUsers/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
  },
  {
    title: "Competences",
    path: "/Competences",
    icon: < FaRegObjectGroup/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
  },
  {
    title: "Jobs",
    path: "/Jobs",
    icon: < FaUsers/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
    subnav: [{
      title: "Department jobs",
      path: "/DepartmentJobs",
      role: "Director",
    }],
  },
  {
    title: "Grades",
    path: "/grades",
    icon: < FaStar/>,
    iconClosed: < MDIcons.MdKeyboardArrowDown/>,
    iconOpened: < MDIcons.MdKeyboardArrowUp/>,
  },
];
