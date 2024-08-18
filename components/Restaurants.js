import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../img/badapav.jpg";
import pic1 from "../img/chinnese.jpg";
import pic2 from "../img/french.jpg";

const Restaurants = () => (
  <div id="restaurants" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
    <div className="text-center mb-5">
      <h2 style={{ color: '#007bff' }}>Available Restaurants</h2>
      <p className="lead mt-4" style={{ color: '#0056b3' }}>
        Discover the best restaurants around you and enjoy delicious meals delivered to your doorstep.
      </p>
    </div>

    <div className="row">
      {/* Restaurant 1 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic} className="card-img-top" alt="Restaurant 1" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>Restaurant A</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Serving a variety of cuisines including Italian, Chinese, and Indian. Rated 4.5 stars by our users.
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant 2 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic1} className="card-img-top" alt="Restaurant 2" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>Restaurant B</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Famous for its fast food and street food delicacies. Rated 4.7 stars by our users.
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant 3 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic2} className="card-img-top" alt="Restaurant 3" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>Restaurant C</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Specializes in gourmet dishes and fine dining experiences. Rated 4.8 stars by our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Restaurants;
