import React from 'react';
import './Professional.css'
import images from '../../../images/ge2.jpg'
const Professional = () => {
    return (
        <section className='Professional-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>Four Wheels Move Body<span className="m-2">Two Wheels Move The Soul</span></h3>
                                <p>If you want to be happy for a day,drink.If you want to be happy for a year,marry.If you want to be happy for life Time, <span>Ride a Bike</span></p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>500+</h1>
                                    <p>Happy Customers</p>
                                </div>

                                <div className="customer">
                                    <h1>190+</h1>
                                    <p>Total Bikes</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;