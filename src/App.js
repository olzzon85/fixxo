// Import all CSS
import './App.css';
// Impoprting BrowserRouter,Routes and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Impoprting useEffect and useState
import React, {useEffect, useState} from 'react'
// Impoprting all sections below
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
// Impoprting all context
import { ProductsContext, FeaturedProductsContext, SquareProductsContext } from './contexts/contexts'


// sets and define useState by different props
function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [square, setSquare] = useState([])

// A function for fetch alldata from api
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()
// A function for fetch featureddata from api
    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()
// A function for fetch squaredata from api
    const fetchSquareData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSquare(await result.json())
    }
    fetchSquareData()

  }, [setProducts, setFeatured, setSquare]) 

  
// Links the page together and the provider brings diffrent values depending on the context.
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
