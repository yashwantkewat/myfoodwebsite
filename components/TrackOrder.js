import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleInputChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleTrackOrder = () => {
    // Retrieve the order details from local storage
    const orderDetails = localStorage.getItem(orderId);

    if (orderDetails) {
      const { status } = JSON.parse(orderDetails);
      setOrderStatus(status);
    } else {
      setOrderStatus('Order ID not found. Please check and try again.');
    }
  };

  return (
    <div id="track-order" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="text-center mb-5">
        <h2 style={{ color: '#007bff' }}>Track Your Order</h2>
        <p className="lead mt-4" style={{ color: '#0056b3' }}>
          Enter your order ID to track the status of your delivery.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Order ID"
              value={orderId}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleTrackOrder}>
                Track Order
              </button>
            </div>
          </div>
          {orderStatus && (
            <div className="alert alert-info mt-4" role="alert">
              {orderStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
