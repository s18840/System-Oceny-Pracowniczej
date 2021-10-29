import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const ProfilePhoto = styled.div`
display: flex;
  justify-content: center;
  border-radius: 100%;
  margin-block-start: -50px;
`

export const ProfileText = styled.text`
display: flex;
text-decoration: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1241f1;
  }
`

export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
`