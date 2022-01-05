import React from 'react'

const Hero = () => {
    return (
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-4 col-12 my-auto px-5 hero-title hero-md">
                        <p className="font-Pacifico">A better way of living</p>
                        <p className="hero-text">High-quality Canadian merchandise</p>
                        <p className="hero-text">Less chemistry, more nature</p>
                    </div>
                    <div className="col-md-8 col-12">
                        <img
                            src="https://hachu-canada.com/wp-content/uploads/2021/10/IMG_6143-2.jpg"
                            alt="new"
                            className="hero-img"
                        />
                    </div>
                    <div className="col-md-4 col-12 my-auto px-5 hero-title hero-sm">
                        <p className="font-Pacifico">A better way of living</p>
                        <p className="hero-text">High-quality Canadian merchandise</p>
                        <p className="hero-text">Less chemistry, more nature</p>
                    </div>
                </div>
            </div>
    )
}

export default Hero
