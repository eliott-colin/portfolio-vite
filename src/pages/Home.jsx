import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Project from '../components/Projects.jsx';
import Skill from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <div className='responsive-row-header'>
        <div className='responsive-row-profile'>
          <Header />
          <ProfileCard />
        </div>
        <section>
          <div style={{ display: 'flex'}}>
            <Project />
          </div>
        </section>
        </div>
        <Skill />
        <div className='responsive-row-skills'>
          <Hobbies />
          <Contact />
        </div>
      </main>
    );
};

export default Home;