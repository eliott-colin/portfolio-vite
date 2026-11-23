import { useEffect } from 'react';
import Header from '../../components/Header.jsx';
import ProfileCard from '../../components/ProfileCard.jsx';
import Project from '../../components/Projects.jsx';
import Skill from '../../components/Skills.jsx';
import Hobbies from '../../components/Hobbies.jsx';
import Contact from '../../components/Contact.jsx';

const Home = () => {
  useEffect(() => {
    document.title = 'Eliott Colin | Développeur';
  }, []);

  return (
    <div style={{ width: '90%', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="responsive-row-header">
        <div className="responsive-row-profile">
          <Header />
          <ProfileCard />
        </div>
        <section className="responsive-row-projects" aria-label="Projets à la une">
          <Project />
        </section>
      </div>
      <main>
        <Skill />
        <div className="responsive-row-skills">
          <section aria-labelledby="hobbies-title">
            <h2 id="hobbies-title" className="section-title">Centres d’intérêt</h2>
            <Hobbies />
          </section>
          <section aria-labelledby="contact-title" className="home-contact">
            <h2 id="contact-title" className="section-title">Me contacter</h2>
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
