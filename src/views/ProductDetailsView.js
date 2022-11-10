// Impoprting useEffect and useState
import React, { useEffect, useState } from 'react'
// Impoprting useParams
import{ useParams } from 'react-router-dom'
// Impoprting all sections below
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetails from '../sections/ProductDetails'
import BreadcrumbSection from '../sections/BreadcrumbSection'

// sets and using useParams and useState

const ProductDetailsView = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

// A functions to fetch data from api

  useEffect(() => {
      const fetchData = async () => {
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProduct(await result.json())
      }
      fetchData()
  }, [])  

// Structure for what will show on page
  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentpage="Products" />
        <ProductDetails product={product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView