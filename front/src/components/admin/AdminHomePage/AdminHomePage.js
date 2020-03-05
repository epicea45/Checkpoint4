import React, {useState, useEffect} from 'react';
import './AdminHomePage.css';
import { Link } from 'react-router-dom';
import Employment from '../Employment/Employment';

const contactApi = require('../../api/contact');

const AdminHomePage = () => {

  const [ contacts, setContacts] = useState([]);

  useEffect(()=> {
    (async () => {
      setContacts(await contactApi.getAllContact());
    })();
  });

  return (
    <div className="home">
      <Link to="/" className="link"><img className="enter" src={require('../../../assets/images/Logo.png')} alt="logo wild code school"/></Link>
        <h1 className="welcome">Bienvenue Victoria, dans ton interface de suivi des Wilders !</h1>
          <h2>Gestion des Wilders et de leurs compétences</h2>      
          
          <h2>Gestion des embauches de Wilders</h2>
          {
            contacts.map(contact => (
              <Employment {...contact} />
            ))
          }
    </div>
  );
};

export default AdminHomePage;