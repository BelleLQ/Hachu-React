import React from 'react'
import {Link} from 'react-router-dom';
const Feature = (props) => {
    return (
        <div className="container-fluid text-center feature-section" style={{backgroundColor:`${props.bg}`}}>
            <p className="feature-title">{props.title}</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center feature-div">
                {props.data.map((item, index) => {
                    if(index>0 && index<5){
                        return (
                                <Link to={`/products/categories/${item.categoryName}`} className="feature-card" key={index} >
                                <div className="feature-img-div">
                                    <img className="feature-img" src={item.photoUrl[0]} alt=""/>
                                </div>
                                <p className="feature-prodName">{item.categoryName}</p>
                                </Link>
                        )
                    }
                    else{}
                })
            }

            </div>
        </div>
    )
}

export default Feature
