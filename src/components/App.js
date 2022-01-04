import React from 'react';
import '../assets/css/App.css';
import {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductsListingPage from "../pages/ProductsListingPage";
import ProductsListingBrandPage from "../pages/ProductsListingBrandPage";


import CategoryContext from '../contexts/CategoryContext'
import BrandContext from '../contexts/BrandContext'
import ProductContext from "../contexts/ProductContext";
import CartContext from "../contexts/CartContext";

function App() {
    const [categories, setCategories] = useState(
      [
      {
      "categoryName": "",
      "photoUrl": [],
      "categoryDesc":""
      }]
    )
    const [products, setProducts] = useState(
        [
            {
                "prodName": "",
                "brandId": "",
                "price": 0,
                "options": [],
                "categoryId": [],
                "photoUrl": []
            }]
    )
    const [cart, setCart] = useState(
        [
            ]
    )
    const [brands, setBrands] = useState([{
        "brandName": "",
        "photoUrl": "",
        "brandDesc":""
    }])
  useEffect(()=>{

      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/categories`)
          .then(res=>res.json())
          .then(jsonData=>{
              setCategories(jsonData.data);
          })
          .catch(err=>{
              console.log(err);
          })
      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/brands`)
          .then(res => res.json())
          .then(brands => {
              setBrands(brands.data);
          })
          .catch(err => {
              console.log(err);
          })
  },[])
  return (
      <Router>
          <CategoryContext.Provider value = {{categories, setCategories}}>
              <BrandContext.Provider value = {{brands, setBrands}}>
              <ProductContext.Provider value = {{products, setProducts}}>
                  <CartContext.Provider value={{cart, setCart}}>
                      <Routes>
                          <Route path='/' element={<HomePage/>} />
                          <Route path='/about' element={<AboutPage/>} />
                          <Route path='/products' element={<ProductsListingPage/>} />
                          <Route path='/products/categories/:categoryId' element={<ProductsListingPage/>} />
                          <Route path='/products/brands/:brandId' element={<ProductsListingBrandPage/>} />
                          <Route path='/products/:productId' element={<ProductDetailPage/>} />
                          <Route path='/login' element={<LoginPage/>} />
                          <Route path='/signup' element={<SignUpPage/>} />
                          <Route path='/cart' element={<CartPage/>} />
                      </Routes>
                  </CartContext.Provider>
             </ProductContext.Provider>
          </BrandContext.Provider>
          </CategoryContext.Provider>
      </Router>
  );
}

export default App;
