import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'
import notFound from '../../images/notFound/404.jpg'

const NoMatch = () => {
    return (
        <div>
            <div>
        <img style={{width:'100%'}} src={notFound} alt="" />
        <Link to="/"><button className='btn btn-warning'>Back To Home</button></Link>
       
    </div>
        </div>
    );
};

export default NoMatch;