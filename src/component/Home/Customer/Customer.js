import React from 'react';
import img1 from '../../../images/j1.jpeg';
import img2 from '../../../images/j4.jpg'
import img3 from '../../../images/ge2.jpg'
import img4 from '../../../images/j2.jpeg'
import img5 from '../../../images/shutterstock.jpg'
import img6 from '../../../images/j5.jpeg'
import BlogsItem from '../CustomerImg/CustomerImg';
import './Customer.css'
import CustomerImg from '../CustomerImg/CustomerImg';

const Customer = () => {
    const images = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        }
    ]
    return (
        <section className='background-for-blog-section'>
            <div className="the-service-hading text-center py-5">
                <h1>Here Our Awesome <span>Customer</span></h1>
            </div>
            <div className='container'>
                <div className="row">
                    {
                        images.map(image => <CustomerImg key={Math.random()} image={image}></CustomerImg>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Customer;