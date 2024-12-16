import React from 'react';
import Header from './components/header';
import ProfileCard from './components/profileCard';
import Skills from './components/Skills';
import Hobbies from './components/hobbies.';
import ContactForm from './components/ContactForm';

function App() {
  const [count, setCount] = useState(0)

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
