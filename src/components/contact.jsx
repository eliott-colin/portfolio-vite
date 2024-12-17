import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Objet" />
      <input type="email" placeholder="Mail" />
      <textarea placeholder="Message"></textarea>
      <label>
        <input type="checkbox" /> Accepter les CGU
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
