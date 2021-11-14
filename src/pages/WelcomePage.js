import React from 'react';
import {Link} from 'react-scroll';
import {useTranslation} from 'react-i18next';
import logo from '../assets/img/feeDBack_logo.png';
import grade_1 from '../assets/img/grade_1.png';
import grade_2 from '../assets/img/grade_2.png';
import grade_3 from '../assets/img/grade_3.png';
import about_img from '../assets/img/about_img.png';
import LoginForm from '../components/WelcomePage/LoginForm';
import WelcomeNav from '../components/WelcomePage/WelcomeNav';
import ContactForm from '../components/WelcomePage/ContactForm';
import ContactInfo from '../components/WelcomePage/ContactInfo';
import {HighlightText, Title} from '../styles/GlobalStyle';
import {
  AboutInfoWrapper,
  AboutWrapper,
  ConctactContentWrapper, ContactRightSide,
  Footer,
  GradeWrapper,
  HomeDiv, ImageStack,
  InlineWrapper,
  Logo,
  WelcomeTextWrapper,
  WelcomeTopWrapper,
} from '../styles/WelcomePageStyle';

function WelcomePage() {
  const {t} = useTranslation();

  return (
    <>
      <WelcomeTopWrapper id="top">
        <Logo src={logo} alt=""/>
        <InlineWrapper>
          <WelcomeNav/>
          <WelcomeTextWrapper>
            {/* TODO make translation to this text */}
            The platform your employee need <br/>
            for a better <HighlightText>growth</HighlightText>
          </WelcomeTextWrapper>
        </InlineWrapper>
        <GradeWrapper>
          <img src={grade_1} alt=""/>
          <img src={grade_2} alt=""/>
          <img src={grade_3} alt=""/>
        </GradeWrapper>
        <LoginForm/>
      </WelcomeTopWrapper>
      <AboutWrapper>
        <ContactRightSide>
          <Title id="About" marginLeft="150px">
            {t('ABOUT')}
          </Title>
          <AboutInfoWrapper>
            {/* TODO make text with translation */}
            aliquip vehicula. aliqua. varius, minim consequat. etiam elit sapien
            aenean elit, luctus congue, tempor est reprehenderit nullam ut donec
            ea
            turpis, nisi a risus ad adipiscing varius, pharetra, vulputate
            consequat
            est scelerisque eget, ut commodo. aliquip vehicula. aliqua. varius,
            minim consequat. etiam elit sapien aenean elit, luctus congue,
            tempor
            est reprehenderit nullam ut donec ea turpis, nisi a risus ad
            adipiscing
            varius, pharetra, vulputate consequat est scelerisque eget, ut
            commodo
          </AboutInfoWrapper>
        </ContactRightSide>
        <ImageStack>
          <img src={about_img} alt=""/>
        </ImageStack>
      </AboutWrapper>
      <ConctactContentWrapper>
        <ContactInfo/>
        <ContactRightSide>
          <Title id="Contact" textAligment="right" marginRight="150px">
            {t('CONTACT')}
          </Title>
          <ContactForm/>
        </ContactRightSide>
      </ConctactContentWrapper>
      <HomeDiv>
        <Link smooth spy to="top">
          {t('HOME')}
        </Link>
      </HomeDiv>
      <Footer/>
    </>
  );
}

export default WelcomePage;
