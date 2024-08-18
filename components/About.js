import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import man1 from "../img/man1.jpg";
import man2 from "../img/man2.jpg";
import man3 from "../img/man3.jpg";

const About = () => (
  <div id="about" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
    <div className="text-center mb-5">
      <h2 style={{ color: '#007bff' }}>About Us</h2>
      <p className="lead mt-4" style={{ color: '#0056b3' }}>
        Welcome to Food Delivery! We are passionate about bringing delicious food right to your doorstep. Our mission is to provide a seamless and enjoyable food delivery experience for our customers.
      </p>
    </div>

    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#0056b3' }}>Our Mission</h3>
            <p className="card-text" style={{ color: '#004085' }}>
              Our mission is to deliver fresh, high-quality food from the best local restaurants directly to your door. We strive to provide exceptional service, ensuring that every meal is delivered hot, fresh, and on time.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#0056b3' }}>Meet Our Team</h3>
            <div className="d-flex justify-content-around mt-4">
              <div className="text-center">
                <img src={man1} alt="Team Member 1" className="rounded-circle mb-2" />
                <h5 style={{ color: '#004085' }}>Abhi tomar</h5>
                <p className="text-muted">CEO & Founder</p>
              </div>
              <div className="text-center">
                <img src={man2} alt="Team Member 2" className="rounded-circle mb-2" />
                <h5 style={{ color: '#004085' }}>yash reddy</h5>
                <p className="text-muted">Chief Operating Officer</p>
              </div>
              <div className="text-center">
                <img src={man3} alt="Team Member 3" className="rounded-circle mb-2" />
                <h5 style={{ color: '#004085' }}>Abhay subramanyam</h5>
                <p className="text-muted">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#0056b3' }}>Contact Us</h3>
            <p className="card-text" style={{ color: '#004085' }}>
              Have questions or feedback? We'd love to hear from you! Reach out to us at:
            </p>
            <p className="font-weight-bold" style={{ color: '#003366' }}>Email: support@fooddelivery.com</p>
            <p className="font-weight-bold" style={{ color: '#003366' }}>Phone: +1 234 567 890</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
