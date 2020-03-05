import React from 'react';
import './Ambiance.css';
import NavBar from '../NavBar/NavBar';


const Ambiance = () => {
  return (
    <div className="home">
      <NavBar />
        <h1 className="wilders">Entrez dans leurs univers remplit</h1>
        <h1 className="wilders">de Code, de Sucreries, de Siestes et d'Humour...</h1>
        <img
          className="selfhelp"
          src={require('../../assets/images/dodomehdi.jpg')}
          alt="Photo de la compagnie wilders"
        />

        <img
          className="selfhelp"
          src={require('../../assets/images/toto.jpg')}
          alt="Photo de la compagnie wilders"
        />
        <img
          className="selfhelp"
          src={require('../../assets/images/coding.jpeg')}
          alt="Photo de la compagnie wilders"
        />
        <img
          className="selfhelp"
          src={require('../../assets/images/dodowiwi.jpg')}
          alt="Photo de la compagnie wilders"
        />
    </div>
  );
};

export default Ambiance;