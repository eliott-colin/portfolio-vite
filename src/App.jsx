import React from 'react';
import Header from './components/header';
import ProfileCard from './components/profileCard';
import Skills from './components/skill';
import Hobbies from './components/hobbies';
import ContactForm from './components/contact';

function App() {
  const a = 0;

  return (
    <div className="App">
      <Header />
      <main>
        <ProfileCard />
        <Skills />
        <Hobbies />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
