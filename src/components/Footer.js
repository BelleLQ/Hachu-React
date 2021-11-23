import React from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer d-flex justify-content-center flex-column">
                <div className="d-flex p-1">
                    <div className="footer-text">Privacy Policy</div>
                    <div className="footer-text">Terms & Conditions</div>
                        <div className="ms-auto footer-text"><a href="https://business.facebook.com/hachu.canada/" target="_blank"><FaFacebookF className="footer-text"/></a></div>
                        <div className="footer-text"><a href="https://www.instagram.com/hachu_select.ca/" target="_blank"><FaInstagram className="footer-text" /></a></div>
                    </div>
                    <div className="d-flex p-1">
                        <div className="me-auto footer-text">hachu.canada@gmail.com</div>
                        <div className="footer-text">© HaChu.  A better way of living.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
