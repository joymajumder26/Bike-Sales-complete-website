import React from 'react';
import './CustomerImg.css'
const CustomerImg = ({ image }) => {
    return (
        <div className='col-lg-4'>
            <div className="img-blog">
                <img src={image.img} alt="" />
            </div>
        </div>
    );
};

export default CustomerImg;