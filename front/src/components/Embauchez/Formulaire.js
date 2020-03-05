import React, { useState } from 'react';
import Message from '../../components/Message/Message';

const contactApi = require('../api/contact');

const Formulaire = () => {
  const [name, setName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [wilderFirstName, setwilderFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const contact = { name, firstname, wilderFirstName, mail, message };
    setResponse(await contactApi.postContact(contact));
  };

  return (
    <form id="contact" onSubmit={handleSubmit}>
    {response && (
        <Message text={response.message} success={response.success} />
    )}
    <label htmlFor="lastname">
        Entrez votre nom
        <input
        id="lastname"
        placeholder="Nom"
        type="text"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        />
    </label>

    <label htmlFor="firstname">
        Entrez votre prénom
        <input
        id="firstname"
        placeholder="Prénom"
        type="text"
        required
        value={firstname}
        onChange={e => setFirstName(e.target.value)}
        />
    </label>
    <label htmlFor="wilderFirstName">
        Entrez le prénom du wilder que vous avez choisi
        <input
        id="firstname"
        placeholder="WilderPrénom"
        type="text"
        required
        value={firstname}
        onChange={e => setwilderFirstName(e.target.value)}
        />
    </label>
    

    <label htmlFor="e-mail">
        Entrez votre adresse e-mail
        <input
        id="e-mail"
        placeholder="Votre adresse e-mail"
        type="email"
        required
        value={mail}
        onChange={e => setMail(e.target.value)}
        />
    </label>

    <label htmlFor="message">
        Entrez votre message
        <textarea
        id="message"
        placeholder="Entrez votre message ici...."
        required
        value={message}
        onChange={e => setMessage(e.target.value)}
        />
    </label>

    <button name="submit" type="submit">
        Envoyer
    </button>
    </form>
  );
};

export default Formulaire;