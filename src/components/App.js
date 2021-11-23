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


import CategoryContext from '../contexts/CategoryContext'
import ProductContext from "../contexts/ProductContext";

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
                "brand": "",
                "price":0,
                "category":"",
                "photoUrl":[]
            }]
    )
  useEffect(()=>{

      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/categories`)
          .then(res=>res.json())
          .then(jsonData=>{
              setCategories(jsonData.data);
          })
          .catch(err=>{
              console.log(err);
          })
  },[])
  return (
      <Router>
          <CategoryContext.Provider value = {{categories, setCategories}}>
              <ProductContext.Provider value = {{products, setProducts}}>
              <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/products' element={<ProductsListingPage/>} />
              <Route path='/products/categories/:categoryName' element={<ProductsListingPage/>} />
              <Route path='/products/:productId' element={<ProductDetailPage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/signup' element={<SignUpPage/>} />
              <Route path='/cart' element={<CartPage/>} />
          </Routes>
          </ProductContext.Provider>
          </CategoryContext.Provider>
      </Router>
  );
}

export default App;
