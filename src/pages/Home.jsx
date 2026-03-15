import Header from '../components/Header';
import Contact from '../components/Contact';
import Project from '../components/Project';
import Skill from '../components/Skills';
import Hobbies from '../components/Hobbies';
import ProfileCard from '../components/ProfileCard';

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