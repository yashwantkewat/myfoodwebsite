import React, { useState, useEffect } from 'react';
import { products } from './api'; // Adjust the path if needed
import { useCart } from '../contexts/CartContext'; // Import the CartContext

const Menu = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart(); // Use the CartContext

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase()));
    }
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    const confirmAdd = window.confirm(`Are you sure you want to add ${product.title} to the cart?`);
    if (confirmAdd) {
      addToCart(product);
    }
  };

  return (
    <div id='menu'>
      <h2>Menu Items</h2>
      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={() => setSelectedCategory('all')}>All</button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedCategory('chinese')}>Chinese</button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedCategory('indian')}>Indian</button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedCategory('american')}>American</button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedCategory('french')}>French</button>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} alt={product.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;