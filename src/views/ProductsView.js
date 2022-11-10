import React from 'react'
// Impoprting all sections below
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = ({products = []}) => {
  window.top.document.title = 'Products | Fixxo.'
  
  return (
  <>
    <MainMenuSection />
    <BreadcrumbSection currentpage="Contacts"/>
    <ProductGridSection title="" products={products} />
    <FooterSection />
  </>
  )
}

export default ProductsView