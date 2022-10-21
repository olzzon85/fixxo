import React from 'react'
import images1 from '../assets/images/img-1.svg'
import images2 from '../assets/images/img-2.svg'

const ShowCaseSection = () => {
  return (
    <section className="showcase container">
        <img src={images1} className="img-left" alt="showcase-img-1"/>
        <div className="showcase-body">
            <h1>Sale Up</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <a className="btn-theme" href="#">
                <span className="btn-theme-left"></span>
                SHOP NOW
                <span className="btn-theme-right"></span>
            </a>
        </div>
        <img src={images2} className="img-right" alt="showcase-img-2"/>
    </section>
  )
}

export default ShowCaseSection