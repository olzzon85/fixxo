import React from 'react'
import ProductCard from '../components/ProductCard'

const TopPicksSection = ({title, products}) => {
  return (

    <section className="productgrid"> 
    <h1 className="hej">{title}</h1>
        <div className="container">
        
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
            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                } 
            </div>
        </div>
    </section>
  )
}

export default TopPicksSection