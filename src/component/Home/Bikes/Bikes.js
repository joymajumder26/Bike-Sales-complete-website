import React from 'react';
import { Link } from 'react-router-dom';

import './Bikes.css'
const Bikes = ({ servicesWork }) => {
    console.log("servicesWork", servicesWork);
    return (
        // show bike data
        <div className='col-lg-4 mb-3'>
            <div className="card-section">
                <div className="services-container text-center">
                    
                    {
                        servicesWork.image && <img src={`data:image/jpeg;base64,${servicesWork.image.img}`} />
                    }
                </div>
                <div className="caption-post-section text-center">
                    <p> ${servicesWork.price}</p>
                    <h4 >{servicesWork.title}</h4>
                    <h6 className="font">{servicesWork.description}</h6>
                </div>
                <div className="explore-more text-center ">
                    <Link className="explore" to={`/details/${servicesWork._id}`} ><button >Book {servicesWork.title}</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Bikes;