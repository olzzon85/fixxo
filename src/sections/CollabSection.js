import React from 'react'
import images1 from '../assets/images/pamela.svg'
import images2 from '../assets/images/lets-be.svg'

const CollabSection = () => {
  return (
    <section className="collab container">
        <img src={images1} alt=""/>
        <img src={images2} alt=""/>
    </section>
  )
}

export default CollabSection