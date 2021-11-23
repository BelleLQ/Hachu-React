import React from 'react'
import {Link} from 'react-router-dom';
const Feature = (props) => {
    console.log(props.data);
    return (
        <div className="container-fluid text-center feature-section" style={{backgroundColor:`${props.bg}`}}>
            <p className="feature-title">{props.title}</p>
            <div className="d-flex flex-wrap justify-content-start mx-4 align-items-center">
                {props.data.map((item, index) => {
                    if(index>0){
                        return (
                            <div key={index}>
                                <Link to={`/products/categories/${item.categoryName}`} className="feature-card">
                                <div className="feature-img-div">
                                    <img className="feature-img" src={item.photoUrl[0]} alt=""/>
                                </div>
                                <p className="feature-prodName">{item.categoryName}</p>
                                </Link>
                            </div>
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
