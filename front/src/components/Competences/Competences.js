import React from 'react';
import './Competences.css';
import NavBar from '../NavBar/NavBar';



const Competences = () => {
  return (
    <div className="home">
        <NavBar />
            <h1 className="cv">Des compétences à vous couper le souffle</h1>
                <div className="element">  
                    <img
                    className="compet"
                    src={require('../../assets/images/Gautier Pro.jpg')}
                    alt="Photo de Gautier, l'homme qui déverse des lignes de code à la seconde"
                    />
                    <img
                    className="compet"
                    src={require('../../assets/images/Alexis fun.jpg')}
                    alt="Photo de Gautier, l'homme qui jongle avec les algos"
                    />
                </div>  
    </div>
  );
};

export default Competences;