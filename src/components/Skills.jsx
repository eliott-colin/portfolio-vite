import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: 'Figma', image: '/assets/figma.png' },
  { name: 'HTML', image: '/assets/html.png' },
  { name: 'JS', image: '/assets/js.png' },
  { name: 'CSS', image: '/assets/css.png' },
  { name: 'React', image: '/assets/react.png' },
  { name: 'PHP', image: '/assets/php.png' },
  { name: 'Node', image: '/assets/node.png' }
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
