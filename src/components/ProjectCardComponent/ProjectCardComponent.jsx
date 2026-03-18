import React from "react";
import "./ProjectCardComponent.css";

const ProjectCardComponent = ({ project , index }) => {
  return (
    <div className="project-card"  style={{ gridColumnStart: (index%2)+1, gridRowStart: index+1, ...(index % 2 === 1 && { justifySelf: "end" }) }} >
      <h3>{project.name}</h3>
      <div className="project-card-wrapper" >
        <img src={project.image} alt={project.name} />
      </div>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Voir le projet
      </a>
    </div>
  );
}

export default ProjectCardComponent;