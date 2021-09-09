import React from "react";
import { Link } from "react-router-dom";
import './Rides.css';
import carImg from  '../../fakeData/Car.png'
import bikeImg from '../../fakeData/Bike.png'
import trainImg from '../../fakeData/Train.png'
import busImg from '../../fakeData/Bus.png'


const Rides = () => {
  return (
    <div className="rides-cards">
      <Link to="/dashboard" className="ride-card">
        <img src={bikeImg} alt="" />
        <h2>Bike</h2>
      </Link>
      <Link to="/dashboard" className="ride-card">
        <img to="/dashboard" src={carImg} alt="" />
        <h2>Car</h2>
      </Link>
      <Link to="/dashboard" className="ride-card">
        <img src={busImg} alt="" />
        <h2>Bus</h2>
      </Link>
      <Link to="/dashboard" className="ride-card">
        <img src={trainImg} alt="" />
        <h2>Train</h2>
      </Link>
    </div>
  );
};

export default Rides;
