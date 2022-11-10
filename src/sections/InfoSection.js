import React from 'react'
import { NavLink } from 'react-router-dom'
// importing pictures
import images3 from '../assets/images/support-icon.svg'
import images4 from '../assets/images/payment-icon.svg'
import images5 from '../assets/images/truck-icon.svg'

const InfoSection = () => {
  return (
                    // structure for info-section

    <section className="info">
        <div className="container">
            <div className="info-icons">
                <div className="info-icon">
                    <NavLink to="/contacts">
                        <img src={images3} alt="support" />
                    </NavLink>
                    <h1 className="text">Customer Support</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images4} alt="payment" />
                    </NavLink>
                    <h1 className="text">Secured Payment</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images5} alt="truck" />
                    </NavLink>
                    <h1 className="text">Free Home Delivery</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images5} alt="truck" />
                    </NavLink>
                    <h1 className="text">30 Day Reuters</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection