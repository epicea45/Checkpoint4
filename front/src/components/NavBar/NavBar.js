import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="NavPosition">
      <div>
        <Link to="/" className="link"><img className="linkHome" src={require('../../assets/images/Logo.png')} alt="logo wild code school"/></Link>
      </div>
        <div className="NavLign">
          <NavLink
            className="NavLink"
            to="/wilders"
            activeClassName="activeNav"
          >
            WILDERS
          </NavLink>
        </div>

        <div className="NavLign">
          <NavLink
            className="NavLink"
            to="/ambiance"
            activeClassName="activeNav"
          >
            AMBIANCE
          </NavLink>
        </div>
        <div className="NavLign">
          <NavLink
            className="NavLink"
            to="/competences"
            activeClassName="activeNav"
          >
            COMPETENCES
          </NavLink>
        </div>
        <div className="NavLign">
          <NavLink
            className="NavLink"
            to="/embauchez"
            activeClassName="activeNav"
          >
            EMBAUCHEZ-LES
          </NavLink>
        </div>
    </div>
  );
};

export default NavBar;
