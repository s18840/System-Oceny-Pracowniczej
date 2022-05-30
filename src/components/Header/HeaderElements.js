import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  left: 400px;
  max-height: 74.36px;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: #fff;
  border: 0.25px gray;
  border-style: none solid solid solid;
  border-left: none;
  font-size: 20px;
`

export const HeaderBtnProfileWrapper = styled.div`
  display: flex;
  right: 0;
  top: 0;
  flex-direction: row-reverse;

  text-align: center;
`

export const HeaderBtnTol = styled(Link)`
  padding: 22px;
  cursor: pointer;
  border: 0.25px solid gray;
  overflow: visible;
  &::hover {
    transition: all 0.2s ease-in-out;
    background: #15cd9c;
  }
`
export const HeaderBtnSignOut = styled(Link)`
  color: #fb0d0d;
  padding: 22px;
  cursor: pointer;
  border: 0.25px solid gray;
  &::hover {
    transition: all 0.2s ease-in-out;
    background: #15cd9c;
  }
`

export const HeaderLocTree = styled.div`
  align-items: center;
  padding: 25px;
  color: #ffffff;
  background-color: #6137a0;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
`

export const HeaderProfile = styled.div`
  padding: 25px;
  background-color: #6137a0;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  align-items: center;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
`

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 25px 0px;
  width: 380px;
  max-height: 38px;
  max-width: 420px;
  border-radius: 45px;
  border: 0.25px solid gray;
`

export const HeaderSearchIcon = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 1px;
`
export const HeaderName= styled(Link)`
 color: #ffffff;
 text-decoration: none ;
`

export const HeaderProfilePhoto = styled(Link)`
  margin-right: 10px;
  min-width: 45px;
  min-height: 45px;
  max-height: 45px;
  max-width: 45px;
  border-radius: 100%;
  cursor: pointer;
`
