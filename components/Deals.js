import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../img/paneer.jpg";
import pic1 from "../img/pbutter.jpg";
import pic2 from "../img/rollbutter.jpg";
const Deals = () => (
  <div id="deals" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
    <div className="text-center mb-5">
      <h2 style={{ color: '#007bff' }}>Deals & Offers</h2>
      <p className="lead mt-4" style={{ color: '#0056b3' }}>
        Check out our latest deals and offers on your favorite meals. Don't miss out on these exclusive discounts!
      </p>
    </div>

    <div className="row">
      {/* Deal 1 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic} className="card-img-top" alt="Deal 1" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>50% Off on First Order</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Enjoy 50% off on your first order. Use the code <strong>FIRST50</strong> at checkout.
            </p>
          </div>
        </div>
      </div>

      {/* Deal 2 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic1} className="card-img-top" alt="Deal 2" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>Buy 1 Get 1 Free</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Buy one meal and get another one for free. Use the code <strong>BOGO</strong> at checkout.
            </p>
          </div>
        </div>
      </div>

      {/* Deal 3 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-primary">
          <img src={pic2} className="card-img-top" alt="Deal 3" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#0056b3' }}>Free Delivery on Orders Over $30</h5>
            <p className="card-text" style={{ color: '#004085' }}>
              Get free delivery on all orders over $30. No code needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Deals;
