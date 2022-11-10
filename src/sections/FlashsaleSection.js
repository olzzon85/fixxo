import React from 'react'
import ProductCard from '../components/ProductCard'

// using prop(products) from app.js
const FlashsaleSection = ({products}) => {
  return (
    
// Structure for flashsale-section and using the component productcard

    <section className="flashgrid"> 
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                {
                    products.map(product => <ProductCard key={product.articleNumber} product={product} />)
                } 
            </div>
            <div className="flashsales-box">
                <div className="flashsales-body">
                    <h1 className="flashsales-title">2 FOR USD $29</h1>
                    <a className="flashsales btn-theme" href="#">
                        <span className="btn-theme-left"></span>
                        <span className="btn-theme-right"></span>
                        SHOP NOW
                    </a>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default FlashsaleSection