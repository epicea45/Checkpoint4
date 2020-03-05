import React from 'react';
import './AdminHomePage.css';
import { Link } from 'react-router-dom';


const AdminHomePage = () => {
  return (
    <div className="home">
      <Link to="/" className="link"><img className="enter" src={require('../../../assets/images/Logo.png')} alt="logo wild code school"/></Link>
        <h1 className="welcome">Bienvenue Victoria, dans ton interface de suivi des Wilders !</h1>
          <h2>Gestion des Wilders et de leurs compétences</h2>      

          <h2>Gestion des embauches de Wilders</h2>
    </div>
  );
};

export default AdminHomePage;