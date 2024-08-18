// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' style={{ backgroundColor: '#343a40', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <h4>About Us</h4>
        <p>We are dedicated to delivering your favorite meals from local restaurants right to your doorstep.</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4>Contact Us</h4>
        <p>Email: support@fooddelivery.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4>Quick Links</h4>
        <a href="/menu" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Menu</a> |
        <a href="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>About Us</a> |
        <a href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Contact</a> |
        <a href="/faq" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>FAQ</a>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4>Follow Us</h4>
        <a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Facebook</a> |
        <a href="https://twitter.com" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Twitter</a> |
        <a href="https://instagram.com" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Instagram</a>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Food Delivery. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a> | 
          <a href="/terms-of-service" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;