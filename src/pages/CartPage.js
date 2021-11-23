import React from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import {AiOutlineClose} from "react-icons/ai"


function CartPage() {
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
                        <tr>
                            <td><AiOutlineClose onClick={()=> {
                            }}/>
                            </td>
                            <td className="cart-img"><img src="https://i1.wp.com/hachu-canada.com/wp-content/uploads/2021/09/IMG_3621.jpg?resize=1024%2C1024&ssl=1" alt=""/></td>
                            <td>The Brand & Iron Laconic Candle - Eunoia</td>
                            <td>CAD$ 40.00</td>
                            <td><div>
                                <a>-</a>
                                <input type="text" value="1"/>
                                <a>+</a>
                            </div></td>
                            <td>CAD$ 40.00</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="coupon d-flex">
                    <input placeholder="Coupon Code" className="coupon-input  p-2"/>
                    <button className="btn btn-primary btn-green p-2 m-0" type="submit">Apply Coupon</button>
                    <button className="btn btn-primary btn-green p-2 btn-update-cart" type="submit">Update Cart</button>
                    </div>

                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CartPage;
