import React from 'react'
import { NavLink } from 'react-router-dom'

// structure for breadcrumb, added a prop(currentpage) so we can know what page we are on
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