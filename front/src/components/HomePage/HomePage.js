import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className="home">
        <h1 className="wilders">Bienvenue au Show des Wilders</h1>
      <div className="elements">  
        <img
          className="company"
          src={require('../../assets/images/company-wilders.jpg')}
          alt="Photo de la compagnie wilders"
        />
        <Link to="/Wilders" className="link"><img className="enter" src={require('../../assets/images/Logo.png')} alt="logo wild code school"/></Link>
      </div>  
    </div>
  );
};

export default HomePage;