import React from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";


function AboutPage() {
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <div className="container-fluid p-0 about-container">
                <div className="about-title-container d-flex justify-content-center align-items-center">

                    <div className="about-title text-center m-auto d-flex flex-column align-items-center">
                        <div className="m-auto">
                            <p className="about">About Hachu</p>
                            <p className="about-text">A better way of living</p>
                        </div>
                    </div>
                </div>

                <div className="about-pic-circle-1">
                    <img src="https://i1.wp.com/hachu-canada.com/wp-content/uploads/2021/09/FullSizeRender-3.jpg?w=1982&ssl=1" alt=""/>
                </div>

                <div className="about-pic-circle-2">
                    <img src="https://i1.wp.com/hachu-canada.com/wp-content/uploads/2021/10/IMG_5028.jpg?w=1978&ssl=1" alt=""/>
                </div>

                <div className="about-pic-circle-3">
                    <img src="https://i1.wp.com/hachu-canada.com/wp-content/uploads/2021/09/IMG_3501.jpg?w=1108&ssl=1" alt=""/>
                </div>

                <div className="container-fluid p-0 d-flex justify-content-center align-items-center pic-circle">
                    <div className="intro-container-circle rounded-circle d-flex  justify-content-center align-items-center">
                        <p className="m-0 intro-text">HaChu
                            HaChu was founded in 2021, with the concept of pursuing green texture, purchasing from Canada, a brand that is environmentally friendly, innovative, and unique. Let us be your eyes and senses, travel into different spaces together, and experience a different additive life. Entering our store is not just about buying and selling goods, we want everyone to find a moment of rest in the busy pace of today.
                        </p>
                    </div>
                </div>

                <div className="about-pic-circle-4">
                    <img src="https://i1.wp.com/hachu-canada.com/wp-content/uploads/2021/09/IMG_3621.jpg?w=2160&ssl=1" alt=""/>
                </div>

                <div className="about-pic-circle-5">
                    <img src="https://i2.wp.com/hachu-canada.com/wp-content/uploads/2021/09/IMG_3490.jpg?w=993&ssl=1" alt=""/>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;
