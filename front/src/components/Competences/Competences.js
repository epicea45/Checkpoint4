import React from 'react';
import './Competences.css';
import NavBar from '../NavBar/NavBar';



const Competences = () => {
  return (
    <div className="home">
        <NavBar />
            <h1 className="wilders">Des compétences à vous couper le souffle</h1>
                <div className="element">  
                  <div className="superdev">
                    <img
                    className="compet"
                    src={require('../../assets/images/Gautier Pro.jpg')}
                    alt="Photo de Gautier, l'homme qui déverse des lignes de code à la seconde"
                    />
                    <h3 className="reflect">Gautier, l'homme qui déverse des lignes de code à la seconde</h3>
                  </div>
                  <div className="superdev">
                    <img
                    className="compet"
                    src={require('../../assets/images/Alexis fun.jpg')}
                    alt="Photo d'Alexis, l'homme qui jongle avec les algos"
                    />
                    <h3 className="reflect">Alexis, l'homme qui jongle avec les algos</h3>
                  </div>
                </div>  
    </div>
  );
};

export default Competences;