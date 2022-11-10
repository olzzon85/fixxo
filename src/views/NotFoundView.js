import React from 'react'
// Impoprting sections below
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

// page for 404, copy from Hans
const NotFoundView = () => {
  return (
    <>
      <MainMenuSection />
      <div className=" container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
      <h1>404 - Page Not Found</h1>
      </div>
      <div style={{ position: "fixed", bottom: "0" }}>
        <FooterSection />
      </div>
    </>
   
  )
}

export default NotFoundView