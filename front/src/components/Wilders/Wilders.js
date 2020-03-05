import React from 'react';
import './Wilders.css';
import NavBar from '../NavBar/NavBar';

const Wilders = () => {
  return (
    <div className="home">
        <NavBar />
        <p className="wilders">Des wilders tous plus fous les uns que les autres</p>
      <div className="js">
        <img
          className="promojs"
          src={require('../../assets/images/Alexis fun.jpg')}
          alt="Photo fun d'Alexis"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Elo fun.jpg')}
          alt="Photo fun d'Elo"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Gautier Pro.jpg')}
          alt="Photo pro de Gautier"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Mehdi fun.jpg')}
          alt="Photo fun de Mehdi"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Nadège pro.jpg')}
          alt="Photo pro de Nadège"
        />
        <img
          className="promojs"
          src={require('../../assets/images/Pierre Fun.jpg')}
          alt="Photo fun de Pierre"
        />
        <img
          className="promojs"
          src={require('../../assets/images/Riad fun.jpg')}
          alt="Photo fun de Riad"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Sibel fun.jpg')}
          alt="Photo fun de Sibel"
        />
        <img
          className="promojs"
          src={require('../../assets/images/Thomas pro.jpg')}
          alt="Photo pro de Thomas"
        />

        <img
          className="promojs"
          src={require('../../assets/images/Ugo pro.jpg')}
          alt="Photo pro d'Ugo"
        />
        <img
          className="promojs"
          src={require('../../assets/images/Willy fun.jpg')}
          alt="Photo fun de Willy"
        />
        <img
          className="promojs"
          src={require('../../assets/images/Zak fun.jpg')}
          alt="Photo fun de Zakaria"
        />
      </div>  
    </div>
  );
};

export default Wilders;