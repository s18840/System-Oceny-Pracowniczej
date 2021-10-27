import React from 'react'
import {
  MailIcon,
  PhoneIcon,
  ContactListWrapper,
  ContactInfoWrapper,
  Contact,
} from '../styles/WelcomePageStyle'

function ContactInfo() {
  // TODO getting contact info from file/db

  return (
    <ContactListWrapper>
      <ContactInfoWrapper>
        <MailIcon />
        <Contact>1827398172937</Contact>
      </ContactInfoWrapper>
      <ContactInfoWrapper>
        <PhoneIcon />
        <Contact>mail@mail.com</Contact>
      </ContactInfoWrapper>
    </ContactListWrapper>
  )
}

export default ContactInfo
