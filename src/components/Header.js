import React from 'react';
import {useContext} from "react";
import {Link} from 'react-router-dom';
import {Container,Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'
import {FaSearch, FaFacebookF, FaInstagram} from 'react-icons/fa'

import CategoryContext from '../contexts/CategoryContext'


function Header() {
    const {categories} = useContext(CategoryContext);
    return (
        <header>
        <Navbar fixed="top" bg="white" expand="lg" style={{position: 'sticky', borderBottom: "1px solid #d3d3d3"}} className="py-3">
            <Container>
                <Navbar.Brand><Link to="/" className="font-Pacifico color-maj-green" style={{fontSize: '35px'}}>Hachu</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title={<a className="nav-link-a underline-fade-in" style={{display:'inline-block'}}>COLLECTIONS</a>} id="navbarScrollingDropdown">
                            {categories.map((category, index)=>{
                                return <NavDropdown.Item href={`/products/categories/${category.categoryName}`} className="nav-link-a" key={index}>{category.categoryName}</NavDropdown.Item>
                                })}

                        </NavDropdown>
                        <Nav.Link><Link className="nav-link-a underline-fade-in" to="/about">ABOUT</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link-a underline-fade-in" to="/cart">CART</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link-a underline-fade-in" to="/login">ACCOUNT</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link-a" to="/search"><FaSearch/></Link></Nav.Link>
                    </Nav>
                        <Form className="d-flex d-none">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    <Nav>
                        <Nav.Link href="https://business.facebook.com/hachu.canada/" target="_blank" className="nav-link-a"><FaFacebookF/></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/hachu_select.ca/" target="_blank" className="nav-link-a"><FaInstagram/></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
}

export default Header;
