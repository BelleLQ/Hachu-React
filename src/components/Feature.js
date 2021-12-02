import React from 'react'
import {Link} from 'react-router-dom';
const Feature = (props) => {
    return (
        <div className="container-fluid text-center feature-section" style={{backgroundColor:`${props.bg}`}}>
            <p className="feature-title">{props.title}</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center feature-div">
                {props.data.map((item, index) => {
                    if(index>0 && index<5){
                        let Name, link;
                        if(item.categoryName) {
                            Name = item.categoryName;
                            link = "categories";
                        }
                        if(item.brandName) {
                            Name = item.brandName;
                            link = "brands"
                        }

                        return (
                                <Link to={`/products/${link}/${item._id}`} className="feature-card" key={index} >
                                <div className="feature-img-div">
                                    <img className="feature-img" src={item.photoUrl[0]} alt=""/>
                                </div>
                                <p className="feature-prodName">{Name}</p>
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
