import { useEffect } from 'react';
import Header from '../../components/Header.jsx';
import Contact from '../../components/Contact.jsx';
import '../page.css';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | Eliott Colin';
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main className="contact-main">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Une question, une proposition de projet ? Réponse sous quelques jours.</p>
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
