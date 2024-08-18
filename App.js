import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Restaurants from './components/Restaurants';
import TrackOrder from './components/TrackOrder';
import Deals from './components/Deals';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Account from './components/Account';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { history } from './components/history';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <CartProvider>
      <div style={{ paddingTop: '60px', backgroundColor: darkMode ? '#121212' : '#fff', color: darkMode ? '#fff' : '#000' }}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Home />
        <Menu />
        <Restaurants />
        <Deals />
        <About />
        <Contact />
        <Blog />
        <Account />
        <Router history={history}>
          <Cart />
          <TrackOrder />
        </Router>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
