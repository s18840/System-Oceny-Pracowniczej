import React from 'react'
import { FaStar } from 'react-icons/fa' // grades
import { FaUsers } from 'react-icons/fa' // teams
import { FaRegUser } from 'react-icons/fa' // profile
import { FaRegObjectGroup } from 'react-icons/fa' // projects
import { FaIdCard } from 'react-icons/fa' // dashboard
import * as MDIcons from 'react-icons/md'


export const NavBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaIdCard/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaRegUser/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
    subnav: [
      {
        title: 'Personal Information',
        path: '/profile',
      },
      {
        title: 'Your goals',
        path: '/yourGoals',
      },
      {
        title: 'Create new employee',
        path: '/newEmp',
      },
    ],
  },
  {
    title: 'Teams',
    path: '/teamList',
    icon: <FaUsers/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
  },
  {
    title: 'Departments',
    path: '/departmentList',
    icon: <FaUsers/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
  },
  {
    title: 'Competences',
    path: '/competenceList',
    icon: <FaRegObjectGroup/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
  },
  {
    title: 'Grades',
    path: '/grades',
    icon: <FaStar/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
    subnav: [
      {
        title: 'Competences',
        path: '/competences',
      },
      {
        title: 'Your Grades',
        path: '/historyGrades',
      },
    ],
  },
]
