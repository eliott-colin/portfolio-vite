import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; 

const FormContainer = styled.form`
  background-color: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
      width: 90%;
      padding: 15px;
    }
  flex-direction: column;
  gap: 25px;
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.12);
`;

const Input = styled.input`
  background-color: #444;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  background-color: #444;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
  height: 45%;
`;

const CheckboxLabel = styled.label`
  color: #888;
  display: flex;
  @media (max-width: 600px) {
      display: block;
    }
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ddd;
  }
`;

const ContactForm = () => {
  const [varsend, setVarsend] = useState(null);
  const [formData, setFormData] = useState({
    objet: '',
    email: '',
    message: '',
    cguAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      objet: formData.objet,
      email: formData.email,
      message: formData.message,
    };

   
    emailjs
      .send(
        'service_9630rtc',  // ID  service 
        'template_mygq6to',  // ID modèle
        templateParams,      // Paramètres du modèle
        'hGQtHGeBTuZtbcwCr'    // clé publique 
      )
      .then(
        (response) => {
          setVarsend('Message envoyé');
          setFormData({
            objet: '',
            email: '',
            message: '',
            cguAccepted: false,
          });
        },
        (error) => {
          setVarsend(`Erreur: ${error.text}`);
        }
      );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="objet"
        placeholder="Objet"
        value={formData.objet}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></TextArea>
      <CheckboxLabel>
        <input
          type="checkbox"
          name="cguAccepted"
          checked={formData.cguAccepted}
          onChange={handleChange}
          required
        />{' '}
        Accepter les CGU 
        <span style={{ margin: 0 ,textAlign:'right', paddingLeft:'65%' }}>{varsend}</span>
      </CheckboxLabel>
      <Button type="submit">Envoyer</Button>
    </FormContainer>
  );
};

export default ContactForm;
