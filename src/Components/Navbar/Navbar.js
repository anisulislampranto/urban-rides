import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo" > UrbanRides </h1>
      <div>
        <Link className="nav-link" to="/home"> Home </Link>
        <Link className="nav-link" to="/home">Destination</Link>
        <Link className="nav-link" to="/home">Blog</Link>
        <Link className="nav-link" to="/home">Contact</Link>
        <Link className="login-btn" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
