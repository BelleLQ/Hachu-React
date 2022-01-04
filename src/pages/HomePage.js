import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import Feature from "../components/Feature";

import CategoryContext from "../contexts/CategoryContext";
import BrandContext from "../contexts/BrandContext";

function HomePage() {
    const {categories} = useContext(CategoryContext);
    const {brands} = useContext(BrandContext);


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
