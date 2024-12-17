import React from 'react';

const hobby = [
  { title: 'Jeux Vidéo', image: './assets/cat.gif' },
  { title: 'Sports', image: './assets/snowboard.png' },
  { title: 'Développement', image: 'assets/cat.png' },
  { title: 'Musique', image: 'assets/turntable.png' },
];

const hobbies = () => {
  return (
    <div className="hobbies">
      {hobby.map((hobby, index) => (
        <div key={index} className="hobby-card">
          <img src={hobby.image} alt={hobby.title} />
          <h3>{hobby.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default hobbies;
