import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import Feature from "../components/Feature";

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
    console.log(categories);
    console.log(brands.photoUrl);

    return (
        <div className="container-fluid p-0">
        <Header />
            <main>
                <Hero/>
                <Feature title="Features" bg=""  data={brands} itemName="brandName" photoUrl="photoUrl" itemId="_id"/>
                <Feature title="Collections" bg="#FFFFFF"  data={categories} itemName={categories.categoryName} photoUrl={categories.photoUrl} itemId={categories._id}/>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
