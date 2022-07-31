import React from "react"
import { FaStar, FaUser } from "react-icons/fa" // grades
import { FaUsers } from "react-icons/fa" // teams
import { BsPeopleFill } from "react-icons/bs" // teams
import { FaRegObjectGroup } from "react-icons/fa" // projects
import { FaIdCard } from "react-icons/fa" // dashboard
import { FaBuilding } from "react-icons/fa" // department
import { MdWork } from "react-icons/md" // department
import { GiArcheryTarget } from "react-icons/gi" //targets
import * as MDIcons from "react-icons/md"


export const NavBarData = [{
  title: "Dashboard",
  path: "/Dashboard",
  icon: < FaIdCard /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: "all"
},
{
  title: "Profile",
  path: "/Profile",
  icon: < FaUser /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: "all",
  subnav:{
    title: "Create new employee",
    path: "/newEmp",
    role: ["Admin"]
  }
},
{
  title: "Teams",
  path: "/Teams",
  icon: < BsPeopleFill /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Manager","Director","HR","Admin"],
  subnav:{
    title: "Add employee to team",
    path: "/AddEmployeTeam",
    role: ["HR","Admin"]
  }
},
{
  title: "Your Team",
  path: "/Team",
  icon: < BsPeopleFill /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["User","Manager", "HR"],
},
{
  title: "Employees",
  path: "/Employees",
  icon: < FaUsers /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: "all"
},
{
  title: "Departments",
  path: "/Departments",
  icon: < FaBuilding /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Manager","Director","Admin","HR"]
},
{
  title: "Competences",
  path: "/Competences",
  icon: < FaRegObjectGroup /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Manager","HR","Admin"]
},
{
  title: "Jobs",
  path: "/Jobs",
  icon: < MdWork /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Director", "HR","Admin"],
  subnav: {
    title: "Department jobs",
    path: "/DepartmentJobs",
    role: ["Director"],
  }
},
{
  title: "Grades",
  path: "/grades",
  icon: < FaStar /> ,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Manager","User", "HR"],
},
{
  title: "Targets",
  path: "/targets",
  icon: <GiArcheryTarget/>,
  iconClosed: < MDIcons.MdKeyboardArrowDown /> ,
  iconOpened: < MDIcons.MdKeyboardArrowUp /> ,
  role: ["Manager", "User", "HR"]
}
]
