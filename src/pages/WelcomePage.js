import React from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import grade_1 from '../assets/img/grade_1.png'
import grade_2 from '../assets/img/grade_2.png'
import grade_3 from '../assets/img/grade_3.png'
import LoginForm from '../components/LoginForm'
import WelcomeNav from '../components/WelcomeNav'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import { HiglightText, Title } from '../styles/GlobalStyle'
import {
  WelcomeTopWrapper,
  InlineWrapper,
  WelcomeTextWrapper,
  AboutInfoWrapper,
  WelcomePageContactWrapper,
  Footer,
  GradeWrapper,
  HomeDiv,
} from '../styles/WelcomePageStyle'

function WelcomePage() {
  const { t } = useTranslation()

  return (
    <>
      <WelcomeTopWrapper id="top">
        <InlineWrapper>
          <WelcomeNav />
          <WelcomeTextWrapper>
            {/* TODO make translation  */}
            The platform your employee need <br />
            for a better <HiglightText>growth</HiglightText>
          </WelcomeTextWrapper>
          <GradeWrapper>
            <img src={grade_1} alt="" />
            <img src={grade_2} alt="" />
            <img src={grade_3} alt="" />
          </GradeWrapper>
        </InlineWrapper>
        <LoginForm />
      </WelcomeTopWrapper>
      <Title id="About" marginLeft="150px">
        {t('ABOUT')}
      </Title>
      <AboutInfoWrapper>
        {/* TODO make text with translation */}
        aliquip vehicula. aliqua. varius, minim consequat. etiam elit sapien
        aenean elit, luctus congue, tempor est reprehenderit nullam ut donec ea
        turpis, nisi a risus ad adipiscing varius, pharetra, vulputate consequat
        est scelerisque eget, ut commodo. aliquip vehicula. aliqua. varius,
        minim consequat. etiam elit sapien aenean elit, luctus congue, tempor
        est reprehenderit nullam ut donec ea turpis, nisi a risus ad adipiscing
        varius, pharetra, vulputate consequat est scelerisque eget, ut commodo
      </AboutInfoWrapper>

      <Title id="Contact" textAligment="right" marginRight="150px">
        {t('CONTACT')}
      </Title>
      <WelcomePageContactWrapper>
        <ContactInfo />
        <ContactForm />
      </WelcomePageContactWrapper>
      <HomeDiv>
        <Link smooth spy to="top">
          {t('HOME')}
        </Link>
      </HomeDiv>
      <Footer />
    </>
  )
}

export default WelcomePage
