import React from 'react';
import Header from './components/header';
import ProfileCard from './components/profileCard';
import Project from './components/project';
import Skills from './components/skill';
import Hobbies from './components/hobbies';
import ContactForm from './components/contact';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";



function App() {
  const a = 0;


  
  return (

    
    <div className="App">
    <SpeedInsights/>
      <main>
        <div className='responsive-row-header'>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', flexDirection: 'column' }}>
          <Header />
          <ProfileCard />
        </div>
        <section>
          <div style={{ display: 'flex'}}>
            <Project />
          </div>
        </section>
        </div>
        <Skills />
        <div className='responsive-row-skills'>
          <Hobbies />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}


export default App;


