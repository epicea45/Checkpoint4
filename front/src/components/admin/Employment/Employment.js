import React from 'react';
import './Employment.css';

const Employment = ({ name, firstname, wilderFirstName, mail, message }) => {
  return (
    <div className="travel">
      <div className="name">{name}</div>
      <div className="firstname">{firstname}</div>
      <div className="wilderFirstName">{wilderFirstName}</div>
      <div className="mail">{mail}</div>
      <div className="message">{message}</div>
    </div>
  );
};

export default Employment;
