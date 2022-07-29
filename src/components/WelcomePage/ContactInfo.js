import React from "react"
import {
  MailIcon,
  PhoneIcon,
  ContactListWrapper,
  ContactInfoWrapper,
  Contact,
} from "../../styles/WelcomePageStyle"
import contact_img from "../../assets/img/contact_img.png";

function ContactInfo() {
  // TODO getting contact info from file/db

  return (
    <ContactListWrapper>
      <img src={contact_img} alt=""/>

    </ContactListWrapper>
  )
}

export default ContactInfo
