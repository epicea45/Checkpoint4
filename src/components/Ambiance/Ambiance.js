import React from 'react';
import './Ambiance.css';


const Ambiance = () => {
  return (
    <div className="animated">
        <h1 className="wilders">Entrez dans leurs univers remplit</h1>
        <h1 className="wilders">de Code</h1>
        <h1 className="wilders">de Sucreries</h1>
        <h1 className="wilders">de Siestes</h1>
        <h1 className="wilders">et d'Humour...</h1>

        <img
          className="selfhelp"
          src={require('../../assets/images/coding.jpeg')}
          alt="Photo de la compagnie wilders"
        />

        <img
          className="selfhelp"
          src={require('../../assets/images/sucrerie.jpg')}
          alt="Photo de la compagnie wilders"
        />
        <img
          className="selfhelp"
          src={require('../../assets/images/coding.jpeg')}
          alt="Photo de la compagnie wilders"
        />
        <img
          className="selfhelp"
          src={require('../../assets/images/coding.jpeg')}
          alt="Photo de la compagnie wilders"
        />
    </div>
  );
};

export default Ambiance;