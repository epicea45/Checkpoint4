import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home">
        <h1 className="wilders">Bienvenue au Show des Wilders</h1>
        <img
          className="company"
          src={require('../../assets/images/company-wilders.jpg')}
          alt="Photo de la compagnie wilders"
        />
    </div>
  );
};

export default HomePage;