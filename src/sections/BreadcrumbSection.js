import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadcrumbSection = ({currentpage}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li> 
                <li>{currentpage}</li> 
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection