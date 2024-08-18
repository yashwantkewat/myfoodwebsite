import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../img/healthyfood.jpg";
import pic1 from "../img/pbutter.jpg";
import pic2 from "../img/momos.jpg";
import pic3 from "../img/pizza.jpg";

const Blog = () => {
  // State to manage visibility of extra content
  const [showMore, setShowMore] = useState({
    article1: false,
    article2: false,
    article3: false,
    article4: false,
  });

  // Toggle function to handle "Read More" clicks
  const handleReadMore = (article) => {
    setShowMore(prevState => ({
      ...prevState,
      [article]: !prevState[article],
    }));
  };

  return (
    <div id="blog" className="container py-5" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="text-center mb-5">
        <h2 style={{ color: '#007bff' }}>Our Blog</h2>
        <p className="lead mt-4" style={{ color: '#0056b3' }}>
          Stay updated with the latest news, tips, and stories from the world of food delivery.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-primary">
            <img src={pic} className="card-img-top" alt="Healthy Eating" />
            <div className="card-body">
              <h3 className="card-title" style={{ color: '#0056b3' }}>Healthy Eating: Tips for a Balanced Diet</h3>
              <p className="card-text" style={{ color: '#004085' }}>
                In today's fast-paced world, maintaining a healthy diet can be challenging. However, with a few simple changes, you can enjoy delicious meals while keeping your diet balanced. Read on to discover our top tips for healthy eating.
              </p>
              {showMore.article1 && (
                <p className="card-text" style={{ color: '#004085' }}>
                  Incorporate a variety of fruits, vegetables, whole grains, and lean proteins into your daily meals. Avoid processed foods, and try to cook at home whenever possible for better control over ingredients.
                </p>
              )}
              <button 
                onClick={() => handleReadMore('article1')} 
                className="btn btn-primary"
              >
                {showMore.article1 ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 border-primary">
            <img src={pic1} className="card-img-top" alt="Sustainable Food Choices" />
            <div className="card-body">
              <h3 className="card-title" style={{ color: '#0056b3' }}>Sustainable Food Choices: How to Eat Responsibly</h3>
              <p className="card-text" style={{ color: '#004085' }}>
                Making sustainable food choices is more important than ever. Learn how you can make a positive impact on the environment with every meal you order. From choosing local ingredients to reducing food waste, we cover it all.
              </p>
              {showMore.article2 && (
                <p className="card-text" style={{ color: '#004085' }}>
                  Opt for organic produce and support local farmers by buying their products. Reduce your carbon footprint by choosing plant-based meals more often.
                </p>
              )}
              <button 
                onClick={() => handleReadMore('article2')} 
                className="btn btn-primary"
              >
                {showMore.article2 ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-primary">
            <img src={pic2} className="card-img-top" alt="Top 10 Restaurants" />
            <div className="card-body">
              <h3 className="card-title" style={{ color: '#0056b3' }}>Top 10 Restaurants to Try This Month</h3>
              <p className="card-text" style={{ color: '#004085' }}>
                Looking for new places to order from? We've compiled a list of the top 10 must-try restaurants this month. Whether you're in the mood for Italian, Chinese, or something new, we've got you covered.
              </p>
              {showMore.article3 && (
                <p className="card-text" style={{ color: '#004085' }}>
                  Explore a mix of cuisines from our top-rated restaurants. Each offers a unique dining experience, ensuring that you’ll find something to satisfy your cravings.
                </p>
              )}
              <button 
                onClick={() => handleReadMore('article3')} 
                className="btn btn-primary"
              >
                {showMore.article3 ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 border-primary">
            <img src={pic3} className="card-img-top" alt="Customer Stories" />
            <div className="card-body">
              <h3 className="card-title" style={{ color: '#0056b3' }}>Customer Stories: How Food Delivery Changed Lives</h3>
              <p className="card-text" style={{ color: '#004085' }}>
                Our customers have amazing stories to tell! From surprise celebrations to heartwarming moments, discover how our food delivery service has made a difference in the lives of our customers.
              </p>
              {showMore.article4 && (
                <p className="card-text" style={{ color: '#004085' }}>
                  From reuniting with loved ones over a meal to fulfilling last-minute cravings, our delivery service has been part of many special moments.
                </p>
              )}
              <button 
                onClick={() => handleReadMore('article4')} 
                className="btn btn-primary"
              >
                {showMore.article4 ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
