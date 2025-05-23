import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: 'Figma', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/figma.png?raw=true' },
  { name: 'HTML', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/html.png?raw=true' },
  { name: 'JS', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/js.png?raw=true' },
  { name: 'CSS', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/css.png?raw=true' },
  { name: 'React', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/react.png?raw=true' },
  { name: 'PHP', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/php.png?raw=true' },
];

const CarouselWrapper = styled.div`
  margin: 40px auto;
  background: rgb(6, 13, 18);
  border-radius: 16px;
  padding: 30px 30px 40px 30px;
  position: relative;
  box-shadow: rgba(255, 255, 255, 0.12) 0px -20px 80px inset;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  margin : 0 0 10px 0;
  font-size: 28px;
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledImage = styled.img`
  height: 120px;
  transition: transform 0.3s ease-in-out;
  border-radius: 16px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <CarouselWrapper id="skills">
      <Title>Outils & technos</Title>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <Slide key={index}>
            <StyledImage src={skill.image} alt={skill.name} />
          </Slide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Skills;
