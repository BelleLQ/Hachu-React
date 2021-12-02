import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer";
import ProductContext from "../contexts/ProductContext";
import {useParams} from "react-router-dom";

function ProductsListingBrandPage() {
    const {products, setProducts} = useContext(ProductContext);
    const [brand, setBrand] =useState({
        "brandName": "",
        "photoUrl": [],
        "brandDesc": ""
    })

    const [productCount, setProductCount] = useState(0);
    const {brandId} = useParams();
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?brandId=${brandId}`)
            .then(res=>res.json())
            .then(products=>{
                setProducts(products.data);
                setProductCount(products.totalProducts);
            })
            .catch(err=>{
                console.log(err);
            })
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/brands/${brandId}`)
            .then(res=>res.json())
            .then(brand=>{
                setBrand(brand.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    let brCount = productCount/4;
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
               <div className="container-fluid p-0">
                   <div className="category-title d-flex"
                        style={{ background: `url(${brand.photoUrl})  center center / cover no-repeat`}}>
                       <p className="m-auto">{brand.brandName}</p>
                   </div>
                   <div className="category-prod-container d-flex flex-wrap align-items-center">
                       <div className={productCount?"d-none":""}>There is no product yet.</div>
                       {products.map((product,index)=>{
                           return(
                               <Link to={`/products/${product._id}`} className="prod-card mx-auto" key={index}
                                     onMouseEnter={()=>{
                                   document.getElementById(`${product._id}`).setAttribute("src", `${product.photoUrl[1]}`);
                               }}
                               onMouseLeave={()=>{
                                   document.getElementById(`${product._id}`).setAttribute("src", `${product.photoUrl[0]}`);
                               }}>
                                   <div className="card mx-3 text-center">
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
                       <Link to="" className={brCount>0 && brCount<3?"prod-card mx-auto":"d-none"} >
                           <div className="card mx-3 text-center">
                               <div className="card-img-container">
                                   <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" className="card-img-top" alt="..."/>
                               </div>
                               <div className="card-body">
                                   <h5 className="card-title"></h5>
                                   <p></p>
                               </div>
                           </div>
                       </Link>

                       <Link to="" className={brCount>0 && brCount<2?"prod-card mx-auto":"d-none"} >
                           <div className="card mx-3 text-center">
                               <div className="card-img-container">
                                   <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" className="card-img-top" alt="..."/>
                               </div>
                               <div className="card-body">
                                   <h5 className="card-title"></h5>
                                   <p></p>
                               </div>
                           </div>
                       </Link>

                   </div>
               </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductsListingBrandPage;
