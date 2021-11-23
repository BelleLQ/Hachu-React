import React, {useContext} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import CategoryContext from "../contexts/CategoryContext";

function HomePage() {
    const {categories} = useContext(CategoryContext);
    return (
        <div className="container-fluid p-0">
        <Header />
            <main>
                <Hero/>
                <Feature title="Features" bg=""  data={categories}/>
                <Feature title="Collections" bg="#FFFFFF" data={categories}/>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
