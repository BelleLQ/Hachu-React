import React from 'react'

const Hero = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-4 text-start my-auto">
                        <p className="font-Pacifico">A better way of living</p>
                        <p className="hero-text">High-quality Canadian merchandise</p>
                        <p className="hero-text">Less chemistry, more nature</p>
                    </div>
                    <div className="col-8">
                        <img
                            src="https://hachu-canada.com/wp-content/uploads/2021/10/IMG_6143-2.jpg"
                            alt="new"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
    )
}

export default Hero
