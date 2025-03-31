import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 25px;
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.12)
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
    console.log('Form Data Submitted:', formData);
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
      </CheckboxLabel>
      <Button type="submit">Envoyer</Button>
    </FormContainer>
  );
};

export default ContactForm;
