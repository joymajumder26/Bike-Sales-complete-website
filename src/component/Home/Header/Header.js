import React from 'react';
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Professional from '../Professional/Professional';
import Blog from '../Customer/Customer'
import './Header.css'
import Service from '../Bike/Bike';
import Testomonial from '../Testomonial/Testomonial'
import Footer from '../Footer/Footer';
import Customer from '../Customer/Customer';
import Bike from '../Bike/Bike';
const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>
            </section>
            <Bike />
            <Professional />
            <Testomonial />
            <Customer />
            <Footer />
        </div>
    );
};

export default Header;