import { useId, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// Identifiants EmailJS publics (côté client par conception).
// Penser à restreindre les domaines autorisés dans le tableau de bord EmailJS.
const EMAILJS_SERVICE_ID = 'service_9630rtc';
const EMAILJS_TEMPLATE_ID = 'template_mygq6to';
const EMAILJS_PUBLIC_KEY = 'eOwEMXrBdFRr89O4s';

const INITIAL_FORM = { objet: '', email: '', message: '', consent: false };

const FormContainer = styled.form`
  background-color: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.12);
  @media (max-width: 800px) {
    padding: 15px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  color: #cfcfcf;
  font-size: 0.9rem;
  font-weight: 500;
`;

const fieldStyles = `
  background-color: #2a2a2a;
  color: white;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  font: inherit;
  transition: border-color 0.2s ease;
  &::placeholder { color: #8a8a8a; }
  &:focus { outline: none; border-color: #646cff; }
`;

const Input = styled.input`
  ${fieldStyles}
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 140px;
`;

const CheckboxLabel = styled.label`
  color: #999;
  font-size: 0.85rem;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  input { margin-top: 3px; }
`;

const Button = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: #ddd;
  }
  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const Status = styled.p`
  margin: 0;
  min-height: 1.5em;
  font-size: 0.9rem;
  color: ${({ $type }) => ($type === 'error' ? '#ff7b7b' : '#7ee2a8')};
`;

const Contact = () => {
  const id = useId();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: '' });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { objet: formData.objet, email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', message: 'Message envoyé. Merci, je reviens vers vous rapidement.' });
      setFormData(INITIAL_FORM);
    } catch {
      setStatus({
        type: 'error',
        message: "L'envoi a échoué. Merci de réessayer ou d'écrire directement par mail.",
      });
    }
  };

  const isSending = status.type === 'sending';

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor={`${id}-objet`}>Objet</Label>
        <Input
          id={`${id}-objet`}
          type="text"
          name="objet"
          placeholder="Proposition de stage, projet freelance…"
          value={formData.objet}
          onChange={handleChange}
          maxLength={150}
          required
        />
      </Field>
      <Field>
        <Label htmlFor={`${id}-email`}>Adresse mail</Label>
        <Input
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="vous@exemple.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <Label htmlFor={`${id}-message`}>Message</Label>
        <TextArea
          id={`${id}-message`}
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          maxLength={5000}
          required
        />
      </Field>
      <CheckboxLabel>
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
        J’accepte que mon adresse mail et mon message soient utilisés uniquement pour répondre à ma demande.
      </CheckboxLabel>
      <Button type="submit" disabled={isSending}>
        {isSending ? 'Envoi en cours…' : 'Envoyer'}
      </Button>
      <Status role="status" aria-live="polite" $type={status.type}>
        {status.message}
      </Status>
    </FormContainer>
  );
};

export default Contact;
