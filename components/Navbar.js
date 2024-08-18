import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll for smooth scrolling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-grey " style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#C8A1E0',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      zIndex: 1000,
    }}>
      <Link className="navbar-brand" to="home" smooth={true} duration={500}>Food Delivery</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="menu" smooth={true} duration={500}>Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="restaurants" smooth={true} duration={500}>Restaurants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="track-order" smooth={true} duration={500}>Order Tracking</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="deals" smooth={true} duration={500}>Deals & Offers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about" smooth={true} duration={500}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="blog" smooth={true} duration={500}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="account" smooth={true} duration={500}>User Account</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="cart" smooth={true} duration={500}>Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="footer" smooth={true} duration={500}>Footer</Link>
          </li>
          <li className="nav-item">
            <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" color={darkMode ? '#FFD700' : '#4D4D4D'} />
            </button>
           </li>
        </ul>
      </div>
    </nav>



  );
};

export default Navbar;