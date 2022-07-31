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

  return (
    <ContactListWrapper>
      <img src={contact_img} alt=""/>

    </ContactListWrapper>
  )
}

export default ContactInfo
