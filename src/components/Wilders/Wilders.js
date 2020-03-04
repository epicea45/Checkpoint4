import React from 'react';
import './Wilders.css';
import NavBar from '../NavBar/NavBar';

const Wilders = () => {
  return (
    <div className="home">
        <NavBar />
        <p className="wilders">Des wilders toujours plus fous</p>
        <p className="wilders">Les uns que les autres</p>
      
        <img
          className="company"
          src={require('../../assets/images/company-wilders.jpg')}
          alt="Photo de la compagnie wilders"
        />
    </div>
  );
};

export default Wilders;