import React from 'react';
import './UseThem.css';
import NavBar from '../NavBar/NavBar';
import Formulaire from './Formulaire';


const UseThem = () => {
  return (
    <div className="home">
      <NavBar />
        <h1 className="wilders">Embauchez-les </h1>
          <div className="container">
            <Formulaire />
          </div>
          
    </div>
  );
};

export default UseThem;