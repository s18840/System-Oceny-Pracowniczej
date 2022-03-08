import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
  background: linear-gradient(#6137a0, #54318a, #311c50);
  display: flex;
  position: fixed;
  justify-content: flex-start;
  flex-direction: column;
  width: 400px;
  height: 100%;
  font-size: 20px;
  top: 0;

  z-index: 15;
`

export const NavLogo = styled.div`
  justify-content: center;
  border-radius: 100%;
  margin-block-start: -50px;
`
export const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
width: 352px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 20px;
&:hover{
  background: #252831;
  border-left: 8px solid #ff4e01;
  cursor: pointer;
}
`
export const SidebarLabel = styled.span`
margin-left: 20px;
`

export const DropdownLink = styled(Link)`
height: 60px;
display: flex;
justify-content: flex-start;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 20px;
&::hover{
  background: #632ce4;
  cursor: pointer;
}
`
export const SidebarNav = styled.nav`
  justify-content: center;
  border-radius: 100%;
  margin-block-start: -50px;
`
export const SidebarWrap = styled.nav`
  justify-content: center;
  border-radius: 100%;
  margin-block-start: -50px;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const NavCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 400px;
  height: 46px;
  margin-block-start: -32px;
  margin-block-end: 64px;
`
export const NavCategoriesWrapper = styled.div`
  display: flex;
  margin-left: 15px;
`

export const NavCategoriesText = styled.div`
  margin-left: 15px;
  color: #ffffff;
`

export const NavBtnDropdown = styled.div`
  margin-right: 15px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1241f1;
  }
`
