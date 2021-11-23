import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer";
import ProductContext from "../contexts/ProductContext";
import {useParams} from "react-router-dom";

function ProductsListingPage() {
    const {products, setProducts} = useContext(ProductContext);
    const [category, setCategory] =useState({
        "categoryName": "",
        "photoUrl": [],
        "categoryDesc": ""
    })

    const [productCount, setProductCount] = useState(0);
    const {categoryName} = useParams();
    useEffect(()=>{
        if(categoryName!=="All") {
            fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/categories/${categoryName}`)
                .then(res=>res.json())
                .then(categoryObj=>{
                    setCategory(categoryObj.data);
                    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?categoryId=${categoryObj.data._id}`)
                        .then(res=>res.json())
                        .then(prodData=>{
                            setProducts(prodData.data);
                            setProductCount(prodData.totalProducts);
                        })
                        .catch(err=>{
                            console.log(err);
                        })

                })
                .catch(err=>{
                    console.log(err);
                })
        }
        else{
            fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
                .then(res=>res.json())
                .then(jsonData=>{
                    setProducts(jsonData.data);
                    console.log("All:");
                    console.log(jsonData.data);

                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },[])
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
               <div className="container-fluid p-0">
                   <div className="category-title d-flex"
                        style={{ background: `url(${category.photoUrl})  center center / cover no-repeat`}}>
                       <p className="m-auto">{category.categoryName}</p>
                   </div>
                   <div className="category-prod-container d-flex flex-wrap m-5 align-items-center">
                       <div className={productCount?"d-none":""}>There is no product yet.</div>
                       {products.map((product,index)=>{
                           return(
                               <Link to={`/products/${product._id}`} className="prod-card" key={index}
                                     onMouseEnter={()=>{
                                   document.getElementById(`${product._id}`).setAttribute("src", `${product.photoUrl[1]}`);
                               }}
                               onMouseLeave={()=>{
                                   document.getElementById(`${product._id}`).setAttribute("src", `${product.photoUrl[0]}`);
                               }}>
                                   <div className="card mx-3 text-center" style={{width: '18rem'}}>
                                       <div className="card-img-container">
                                           <img src={product.photoUrl[0]} className="card-img-top" id={product._id} alt="..."/>
                                       </div>
                                       <div className="card-body">
                                           <h5 className="card-title">{product.prodName}</h5>
                                           <p>CAD${product.price}</p>
                                       </div>
                                   </div>
                               </Link>
                           )
                       })}

                   </div>
               </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductsListingPage;
