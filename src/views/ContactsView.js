import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'

const ContactView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
  <>
    {/* <MainMenuSection />
    <BreadcrumbSection currentpage="Contacts"/>
    <MapSection /> */}
    <ContactFormSection />
    <FooterSection />
  </>
  )
}

export default ContactView