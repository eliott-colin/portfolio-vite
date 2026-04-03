import React from 'react';
import Header from '../../components/Header.jsx';
import Contact from '../../components/Contact.jsx';
import './ContactPage.css';
import { useOutletContext } from 'react-router-dom';

const ContactPage = () => {
  const { currentPage } = useOutletContext();
  return (
    <div>
      <div style={{paddingLeft: "5%",paddingRight: "5%"}}>
        <Header currentPage="contact"/>
      </div>
      <Contact />
    </div>
    );
};

export default ContactPage;