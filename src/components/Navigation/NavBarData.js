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
    ],
  },
  {
    title: 'Teams',
    path: '/teams',
    icon: <FaUsers/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
    subnav: [
      {
        title: 'Your Teams',
        path: '/yourTeams',
      },
      {
        title: 'Teams History',
        path: '/hisoryTeams',
      },
      {
        title: 'New Team',
        path: '/newTeam',
      },
    ],
  },
  {
    title: 'Projects',
    path: '/projectList',
    icon: <FaRegObjectGroup/>,
    iconClosed: <MDIcons.MdKeyboardArrowDown />,
    iconOpened: <MDIcons.MdKeyboardArrowUp />,
    subnav: [
      {
        title: 'Project List',
        path: '/projectList',
      },
      {
        title: 'Your Projects',
        path: '/hisoryTeams',
      },
      {
        title: 'New Project',
        path: '/newProject',
      },
    ],
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
