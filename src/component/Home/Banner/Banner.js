import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="the-heading-part py-4 d-flex align-content-end flex-wrap">
                        <h1 className="text-primary fw-bold">
                            The Bike Sales
                        </h1>
                        <p className="font">
                            BikeExchange is the place to buy or sell any bike, accessory, component or part from anyone, anywhere, anytime. Shop and browse through thousands of bikes & cycling products for sale from hundreds of bike shops and thousands of private sellers Australia-wide.<br />  you’re never     going to get others to feel anything when  <br />  they  look at your pictures.
                        </p><br />
                        <Link to='/exploreAllBike'><button className="edit">Explore All Bikes</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;