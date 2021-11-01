import React from 'react'
import { useTranslation } from 'react-i18next'
import { WelcomeNavButton, WelcomeNav } from '../../styles/WelcomePageStyle'

function Nav() {
  const { t } = useTranslation()

  return (
    <WelcomeNav>
      <WelcomeNavButton>{t('HOME')}</WelcomeNavButton>
      <WelcomeNavButton smooth spy to="About">
        {t('ABOUT')}
      </WelcomeNavButton>
      <WelcomeNavButton smooth spy to="Contact">
        {t('CONTACT')}
      </WelcomeNavButton>
    </WelcomeNav>
  )
}

export default Nav
