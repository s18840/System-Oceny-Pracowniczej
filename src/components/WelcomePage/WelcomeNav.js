import React from "react"
import { WelcomeNavButton, WelcomeNav } from "../../styles/WelcomePageStyle"

function Nav() {

  return (
    <WelcomeNav>
      <WelcomeNavButton to="#">Home</WelcomeNavButton>
      <WelcomeNavButton smooth spy to="About">
        About
      </WelcomeNavButton>
      <WelcomeNavButton smooth spy to="Contact">
        Contact
      </WelcomeNavButton>
    </WelcomeNav>
  )
}

export default Nav
