import React, {useContext} from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import {AiOutlineClose} from "react-icons/ai"
import CartContext from "../contexts/CartContext";


function CartPage() {
    const {cart, setCart} = useContext(CartContext);
    const increaseQty=(evt)=>{
         let valueNow=evt.target.parentNode.childNodes[1].getAttribute("value");
        evt.target.parentNode.childNodes[1].setAttribute("value",parseInt(valueNow)+1);
        document.getElementById("counter").value=parseInt(valueNow)+1;
        }
    const decreaseQty=(evt)=>{
        let valueNow=evt.target.parentNode.childNodes[1].getAttribute("value");
        if(valueNow>0) {
            evt.target.parentNode.childNodes[1].setAttribute("value", parseInt(valueNow) - 1);
            document.getElementById("counter").value = parseInt(valueNow) - 1;
        }
    }
    const deleteItemFromCart=(cartItem)=>{

    }
    return (
        <div className="container-fluid p-0">
            <Header/>
            <main>
                <div className="container-fluid cart-container">
                <div className="table-responsive">
                    <table className="table cart-table align-middle">
                        <thead>
                        <tr>
                            <th scope="col" className="cart-heading">&nbsp;</th>
                            <th scope="col" className="cart-heading">&nbsp;</th>
                            <th scope="col" className="cart-heading">Product</th>
                            <th scope="col" className="cart-heading">Price</th>
                            <th scope="col" className="cart-heading">Quantity</th>
                            <th scope="col" className="cart-heading">Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((cartItem,index)=>{
                            return(
                                <tr key={index}>
                                    <td><AiOutlineClose onClick={deleteItemFromCart(cartItem)}/>
                                    </td>
                                    <td className="cart-img"><a href={`/products/${cartItem.productId}`}><img src={cartItem.productUrl} alt=""/></a></td>
                                    <td>{cartItem.brand} {cartItem.productName}</td>
                                    <td>{cartItem.productPrice}</td>
                                    <td>
                                        <div className='cart-product-counter d-flex align-items-center'>
                                            <button className='down_count btn' key="1" title='Down' onClick={decreaseQty}>-</button>
                                            <input className='counter' id="counter" type="text" placeholder="value..." value={cartItem.quantity}/>
                                            <button className='up_count btn' key="1" title='Up' onClick={increaseQty}>+</button>
                                        </div>
                                    </td>
                                    <td>{cartItem.productPrice*cartItem.quantity}</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                    <div className="coupon d-flex">
                    <input placeholder="Coupon Code" className="coupon-input  p-2"/>
                    <button className="btn btn-primary btn-green p-2 m-0" type="submit">Apply Coupon</button>
                    <button className="btn btn-primary btn-green p-2 btn-update-cart" type="submit">Update Cart</button>
                    </div>

                    <div>
                        <form action="/checkout">
                        <button className="btn btn-primary btn-green p-2 btn-update-cart mt-5" type="submit" style={{width:"28%"}}>Check out</button>
                        </form>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CartPage;
