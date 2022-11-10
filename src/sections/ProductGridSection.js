import React from 'react'
// importing productcard as a component
import ProductCard from '../components/ProductCard'
// Adding and using two props
const ProductGridSection = ({title, products}) => {

    return (
        // Structure for featured-products, with card-component
        
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map(product => <ProductCard key={product.articleNumber} product={product} />)
                } 
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection