import React from 'react'
import {Link} from 'react-scroll'
import {useTranslation} from 'react-i18next'
import logo from '../assets/img/feeDBack logo.png'
import grade_1 from '../assets/img/grade_1.png'
import grade_2 from '../assets/img/grade_2.png'
import grade_3 from '../assets/img/grade_3.png'
import about_img from '../assets/img/about_img.png'
import LoginForm from '../components/LoginForm'
import WelcomeNav from '../components/WelcomeNav'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import {HiglightText, Title} from '../styles/GlobalStyle'
import {
  AboutInfoWrapper,
  AboutWrapper,
  ConctactContentWrapper,
  Footer,
  GradeWrapper,
  HomeDiv,
  InlineWrapper,
  Logo,
  WelcomeTextWrapper,
  WelcomeTopWrapper,
} from '../styles/WelcomePageStyle'

function WelcomePage() {
  const {t} = useTranslation()

  return (
    <>
      <WelcomeTopWrapper id="top">
        <Logo src={logo} alt=""/>
        <InlineWrapper>
          <WelcomeNav/>
          <WelcomeTextWrapper>
            {/* TODO make translation to this text */}
            The platform your employee need <br/>
            for a better <HiglightText>growth</HiglightText>
          </WelcomeTextWrapper>
          <GradeWrapper>
            <img src={grade_1} alt=""/>
            <img src={grade_2} alt=""/>
            <img src={grade_3} alt=""/>
          </GradeWrapper>
        </InlineWrapper>
        <LoginForm/>
      </WelcomeTopWrapper>
      <Title id="About" marginLeft="150px">
        {t('ABOUT')}
      </Title>
      <AboutWrapper>
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
        <img src={about_img} alt=""/>
      </AboutWrapper>
      <Title id="Contact" textAligment="right" marginRight="150px">
        {t('CONTACT')}
      </Title>
      <ConctactContentWrapper>
        <ContactInfo/>
        <ContactForm/>
      </ConctactContentWrapper>
      <HomeDiv>
        <Link smooth spy to="top">
          {t('HOME')}
        </Link>
      </HomeDiv>
      <Footer/>
    </>
  )
}

export default WelcomePage
