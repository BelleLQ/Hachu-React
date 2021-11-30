import React, {useEffect, useState} from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import {useParams, Link} from "react-router-dom";


function ProductsListingPage() {
    const {productId} = useParams();
    const [product,setProduct] = useState({
        "prodName": "",
        "brandId": "",
        "price": 0,
        "options": [],
        "categoryId": [],
        "photoUrl": []
    })
    const [category, setCategory] =useState({
        "categoryName": "",
        "photoUrl": "",
        "categoryDesc":""
    })

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${productId}`)
            .then(res=>res.json())
            .then(jsonData=>{
                setProduct(jsonData.data);
            })
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/categories/${product.categoryId}`)
            .then(res=>res.json())
            .then(category=>{
                setCategory(category.data);
            })
            .catch(err=>{
                console.log(err);
            })

    }, [product])
    let imgCount = product.photoUrl.length/4;
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <div className="container-fluid p-0">
                    <p className="d-inline-block prod-index">
                        <Link to="/">Home </Link>
                         /
                        <Link to={`/products/categories/${category._id}`}> {category.categoryName} </Link>
                         / {product.prodName}
                    </p>
                    <div className="row">
                        <div className="col-6 prod-pic-display text-center">
                            <img src={product.photoUrl[0]} alt="" id="prod-big-pic"/>
                        </div>
                        <div className="col-5 prod-desc">
                            <p className="prod-title">{product.prodName}</p>
                            <p className="prod-price">CAD${product.price.toFixed(2)}</p>
                            <div className={product.options.length?"prod-flavor":"d-none"}>
                                <label>Flavor</label>
                                <select className={product.options.length?"form-select":"d-none"} aria-label="Default select example">
                                    <option selected>Please select a flavor</option>
                                    {product.options.map((option, index)=>{
                                        return <option key={index} value={index}>{option.option}</option>
                                    })}
                                </select>
                                <hr />
                            </div>
                            <div className="prod-cart">
                                <input/>
                                <div className="add-to-cart mx-auto justify-content-center p-auto d-flex">
                                    <p className="my-auto">Add to Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row small-pic-container">
                        <div className="col-6 prod-pic-small p-0 d-flex flex-wrap">
                            {product.photoUrl.map((photo,index)=>{
                                return (
                                    <Link to="#" className="d-inline-block d-flex" onClick={(evt)=>{
                                        document.getElementById("prod-big-pic").setAttribute("src",`${evt.target.getAttribute("src")}`)
                                    }}>
                                    <img src={photo} alt="" key={index} className="mx-auto small-img"/>
                                    </Link>
                                )
                            })}

                            <Link to="#" className=
                                {imgCount>0 && imgCount<4 ?"d-inline-block d-flex":"d-none disabled-link"}>
                                <img src="" alt="" key="" className="mx-auto "/>
                            </Link>

                            <Link to="#" className=
                                {imgCount>0 && imgCount<3 ?"d-inline-block d-flex":"d-none disabled-link"}>
                                <img src="" alt="" key="" className="mx-auto "/>
                            </Link>

                            <Link to="#" className=
                                {imgCount>0 && imgCount<2 ?"d-inline-block d-flex":"d-none disabled-link"}>
                                <img src="" alt="" key="" className="mx-auto "/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductsListingPage;
