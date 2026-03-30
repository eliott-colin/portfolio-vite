import React from 'react';
import Header from '../../components/Header.jsx';
import ProfileCard from '../../components/ProfileCard.jsx';
import Project from '../../components/Projects.jsx';
import Skill from '../../components/Skills.jsx';
import Hobbies from '../../components/Hobbies.jsx';
import Contact from '../../components/Contact.jsx';
import './Home.css';

const Home = (props) => {
  const pageClass = props.pageClass || "home-main";
  return (
    <main style={{  width: "90%",margin: "0 auto", }}>
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