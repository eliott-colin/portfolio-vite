import React from 'react';
import Header from './components/header';
import ProfileCard from './components/profileCard';
import Project from './components/project';
import Skills from './components/skill';
import Hobbies from './components/hobbies';
import ContactForm from './components/contact';

function App() {
  const a = 0;

  return (
    <div className="App">
      <main>
        <div style={{display: 'flex'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '45%', flexDirection: 'column' }}>
          <Header />
          <ProfileCard />
        </div>
          <Project />
        </div>
        <Skills />
        <Hobbies />
        {/* <ContactForm /> */}
      </main>
    </div>
  );
}

export default App;


