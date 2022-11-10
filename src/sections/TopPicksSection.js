import React from 'react'
// Importing productcard-component
import ProductCard from '../components/ProductCard'
// using prop(products) from app.js 
const TopPicksSection = ({products}) => {
  return (

// Structure for top-pick-section and using the component productcard

    <section className="productgrid"> 
        <div className="container">
            <div className="top-pick-box">
                <div className="top-pick-body">
                    <h1 className="top-pick-title">2 FOR USD $29</h1>
                    <a className="top-pick btn-theme" href="#">
                        <span className="btn-theme-left"></span>
                        <span className="btn-theme-right"></span>
                        SHOP NOW
                    </a>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                {
                    products.map(product => <ProductCard key={product.articleNumber} product={product} />)
                } 
            </div>
        </div>
    </section>
  )
}

export default TopPicksSection