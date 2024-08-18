import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => (
  <div id="contact" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
    <div className="text-center mb-5">
      <h2 style={{ color: '#007bff' }}>Contact Us</h2>
      <p className="lead mt-4" style={{ color: '#0056b3' }}>
        We'd love to hear from you! Whether you have a question about our service, feedback, or just want to say hello, feel free to reach out.
      </p>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card h-100 border-primary">
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#0056b3' }}>Get in Touch</h3>
            <p className="card-text" style={{ color: '#004085' }}>
              Fill out the form below to send us a message, and we'll get back to you as soon as possible.
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="name" style={{ color: '#004085' }}>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: '#004085' }}>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ color: '#004085' }}>Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card h-100 border-primary">
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#0056b3' }}>Contact Information</h3>
            <p className="card-text" style={{ color: '#004085' }}>
              You can also reach us at:
            </p>
            <ul className="list-unstyled">
              <li style={{ color: '#004085' }}><strong>Email:</strong> support@fooddelivery.com</li>
              <li style={{ color: '#004085' }}><strong>Phone:</strong> +1 234 567 890</li>
              <li style={{ color: '#004085' }}><strong>Address:</strong> 123 Food Street, Flavor Town, USA</li>
            </ul>
            <p className="mt-4" style={{ color: '#004085' }}>
              Follow us on social media:
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#!" style={{ color: '#007bff' }}>
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" style={{ color: '#007bff' }}>
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" style={{ color: '#007bff' }}>
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
