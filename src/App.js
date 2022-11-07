import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import { ProductsContext, FeaturedProductsContext, SquareProductsContext } from './contexts/contexts'



function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [square, setSquare] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchSquareData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSquare(await result.json())
    }
    fetchSquareData()

  }, [setProducts, setFeatured, setSquare]) 

  

  return (
    <BrowserRouter>
    <ProductsContext.Provider value={products}>
    <FeaturedProductsContext.Provider value={featured}>
    <SquareProductsContext.Provider value={square}>
      <Routes>
        <Route path="/" element={<HomeView products={products} />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView products={products} />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </SquareProductsContext.Provider>
    </FeaturedProductsContext.Provider> 
    </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
