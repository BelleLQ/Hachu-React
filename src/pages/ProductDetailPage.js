import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import {useParams, Link} from "react-router-dom";
import CartContext from "../contexts/CartContext";
import BrandContext from "../contexts/BrandContext";
 import CategoryContext from "../contexts/CategoryContext";


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
    const categories = useContext(CategoryContext);
    const [qty, setQty] = useState(1);
    const {brands} = useContext(BrandContext);
    const {cart, setCart} = useContext(CartContext);
    let imgCount;
    let thisCategory;

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${productId}`)
            .then(res=>res.json())
            .then(jsonData=>{
                setProduct(jsonData.data);

            })
            .then(()=>calculateImgCount())
            .then(()=>getThisCategory())
            .catch(err => {
                console.log(err);
            })


    }, [])
    const increaseQty=()=>{
        setQty(qty+1);
    }
    const decreaseQty=()=>{
        setQty(qty-1);
    }
    const addItemToCart=()=>{
        console.log(`${brands} is added to cart`);

        if(cart.length > 0 && cart.find(ele=>ele.productId===productId)) {
            const sameItem=cart.find(ele=>ele.productId===productId)
            sameItem.quantity+=qty;
        }
        else{
            const brandName=brands.find(ele=>ele._id===product.brandId).brandName;
            const newItem = {
                "productId": productId,
                "brand":brandName,
                "productName": product.prodName,
                "productPrice": product.price,
                "productUrl": product.photoUrl[0],
                "quantity": qty
            }
            if(cart.length===0) {
                setCart([...cart, newItem]);
            }
            else {
                console.log(cart);
                const newCart = cart.push(newItem);
                setCart(newCart);
            }
        }
    }
    const clearItemsInCart=()=>{
        setCart([]);
    }

    const calculateImgCount=()=>{
        imgCount = product.photoUrl.length/4;

    }

    const getThisCategory = () =>{

        if(categories){
        thisCategory= categories.categories.find((ele)=>{
            return ele._id===product.categoryId[0];
        });
        }
        else thisCategory={};
    }

    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <div className="container-fluid p-0">
                    <p className="d-inline-block prod-index">
                        <Link to="/">Home </Link>
                         /
                        <Link to={(thisCategory)?`/products/categories/${thisCategory._id}`:``}> {(thisCategory)?thisCategory.categoryName:""} </Link>
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
                                <div className='cart-product-counter d-flex align-items-center'>
                                    <button className='down_count btn' title='Down' onClick={decreaseQty}>-</button>
                                    <input className='counter' id="counter" type="text" placeholder="value..." value={qty}/>
                                    <button className='up_count btn' title='Up' onClick={increaseQty}>+</button>
                                </div>
                                <button className="add-to-cart btn" onClick={addItemToCart} disabled={qty==0?true:false}>Add to Cart</button>
                                {/*<button className="add-to-cart btn" onClick={clearItemsInCart}>clear Cart</button>*/}

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
