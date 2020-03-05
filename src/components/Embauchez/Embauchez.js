import React from 'react';
import './Embauchez.css';
import NavBar from '../../components/NavBar/NavBar';
import Formulaire from './Formulaire';

const Embauchez = () => {
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

export default Embauchez;