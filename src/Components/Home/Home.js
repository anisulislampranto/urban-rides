import React from 'react';
import Navbar from '../Navbar/Navbar';
import Rides from '../Rides/Rides';

import './Home.css'


const Home = () => {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Rides></Rides>
        </div>
    );
};

export default Home;