import React from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer d-flex justify-content-center flex-column">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="footer-text">Privacy Policy</div>
                        <div className="footer-text">Terms & Conditions</div>
                    </div>

                    <div className="col-12 col-md-6 footer-right-column">
                        <div className="footer-text "><a href="https://www.facebook.com/hachu.select.ca" target="_blank"><FaFacebookF className="footer-text"/></a></div>
                        <div className="footer-text"><a href="https://www.instagram.com/hachu_select.ca/" target="_blank"><FaInstagram className="footer-text" /></a></div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="footer-text">hachu.canada@gmail.com</div>
                        </div>
                        <div className="col-12 col-md-6 footer-right-column">
                            <div className="footer-text">© HaChu.  A better way of living.</div>
                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
