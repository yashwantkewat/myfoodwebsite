import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import the CartContext
import { history } from './history'; // Import the custom history object

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useCart(); // Use the CartContext

  const handleRemove = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      removeFromCart(productId);
    }
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const handleSubmit = () => {
    const confirmed = window.confirm('Are you sure you want to submit your order for delivery?');
  
    if (confirmed) {
      // Generate a unique order ID
      const orderId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  
      // Store the order details in local storage or state (this simulates saving the order)
      localStorage.setItem(orderId, JSON.stringify({
        status: 'Your order is being prepared.',
        // Add more details if necessary
      }));
  
      alert(`Your order has been submitted! Your Order ID is: ${orderId}`);
  
      history.push(`/track-order/${orderId}`);
    }
  };
  

  
  // Ensure price and quantity are valid numbers
  const totalPrice = cart.reduce((acc, product) => acc + (parseFloat(product.price) * (product.quantity || 1)), 0);

  return (
    <div id='cart' style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary me-2" onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{product.quantity || 1}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <button className="btn btn-danger me-2" onClick={() => handleRemove(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-warning me-2" onClick={() => clearCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit for Delivery
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
