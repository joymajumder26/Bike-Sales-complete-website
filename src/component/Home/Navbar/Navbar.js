import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {


    const [loggedInUser, setLoggedIn] = useContext(UserContext)


    return (
        // show navbar data
        <nav class="navbar navbar-expand-lg navbar-light sticky">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span className='mr-4'><FontAwesomeIcon icon={faMotorcycle} /></span>
                    <span className='customize'>Bike Sales</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav navbar-customize navItem">
                        <li>
                            <HashLink to='/home#home'>Home</HashLink>
                        </li>
                        <li>
                            <Link to='/exploreAllBike'>Explore Bike</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <HashLink to="/home#review">Review</HashLink>
                        </li>
                        {/* login */}
                        <li>
                            <Link to='/login'>{loggedInUser.email ? <Link to='/home' className='position' onClick={() => setLoggedIn('')}>Sing Out</Link> : 'Sing In'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;