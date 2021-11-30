import React from 'react'
import {Link} from 'react-router-dom';
const Brand = (props) => {
    return (
        <div className="container-fluid text-center feature-section" style={{backgroundColor:`${props.bg}`}}>
            <p className="feature-title">{props.title}</p>
            <div className="d-flex flex-wrap justify-content-center feature-div align-items-center">
                {props.data.map((item, index) => {
                    if(index<4){
                        return (

                                <Link to={`/products/brands/${item.brandName}`} className="feature-card">
                                    <div className="feature-img-div">
                                        <img className="feature-img" src={item.photoUrl[0]} alt=""/>
                                    </div>
                                    <p className="feature-prodName">{item.brandName}</p>
                                </Link>
                        )
                    }
                })
                }

            </div>
        </div>
    )
}

export default Brand
