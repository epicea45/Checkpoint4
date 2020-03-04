import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className="NavPosition">
      <img
        className="logo"
        src={require('../../assets/images/Logo.png')}
        alt="logo wild code school"
      />
      <div className="nav">
        <div className="NavBarAdminLeft">
          <NavLink
            className="NavLinkAdmin"
            to="/admin-accueil"
            activeClassName="activeAdmin"
          >
            WILDERS
          </NavLink>
        </div>

        <div className="NavBarAdminLeft">
          <NavLink
            className="NavLinkAdmin"
            to="/admin-publications"
            activeClassName="activeAdmin"
          >
            AMBIANCE
          </NavLink>
        </div>
        <div className="NavBarAdminLeft">
          <NavLink
            className="NavLinkAdmin"
            to="/admin-agenda"
            activeClassName="activeAdmin"
          >
            COMPETENCES
          </NavLink>
        </div>
        <div className="NavBarAdminLeft">
          <NavLink
            className="NavLinkAdmin"
            to="/admin-adresses"
            activeClassName="activeAdmin"
          >
            EMBAUCHER
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
