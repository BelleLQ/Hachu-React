import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Brand from "../components/Brand";

import CategoryContext from "../contexts/CategoryContext";

function HomePage() {
    const {categories} = useContext(CategoryContext);
    const [brands, setBrands] = useState([{
        "brandName": "",
        "photoUrl": "",
        "brandDesc":""
    }])
    useEffect(()=> {
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/brands`)
            .then(res => res.json())
            .then(brands => {
                setBrands(brands.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    return (
        <div className="container-fluid p-0">
        <Header />
            <main>
                <Hero/>
                <Brand title="Brands" bg="" data={brands}/>
                <Feature title="Collections" bg="#FFFFFF"  data={categories}/>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
