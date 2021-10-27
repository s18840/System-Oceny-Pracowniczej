import React from 'react'
import { FaStar } from 'react-icons/fa' // grades
import { FaUsers } from 'react-icons/fa' // teams
import { FaRegUser } from 'react-icons/fa' // profile
import { FaRegObjectGroup } from 'react-icons/fa' // projects
import { FaIdCard } from 'react-icons/fa' // dashboard
import * as MDIcons from 'react-icons/md'

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: FaIdCard,
    iconOpened: <MDIcons.MdKeyboardArrowDown />,
    iconClosed: <MDIcons.MdKeyboardArrowUp />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: FaRegUser,
    iconOpened: <MDIcons.MdKeyboardArrowDown />,
    iconClosed: <MDIcons.MdKeyboardArrowUp />,
    subnav: [
      {
        title: 'Personal Information',
        path: '/personalInformation',
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
    icon: FaUsers,
    iconOpened: <MDIcons.MdKeyboardArrowDown />,
    iconClosed: <MDIcons.MdKeyboardArrowUp />,
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
    path: '/projects',
    icon: FaRegObjectGroup,
    iconOpened: <MDIcons.MdKeyboardArrowDown />,
    iconClosed: <MDIcons.MdKeyboardArrowUp />,
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
    icon: FaStar,
    iconOpened: <MDIcons.MdKeyboardArrowDown />,
    iconClosed: <MDIcons.MdKeyboardArrowUp />,
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
