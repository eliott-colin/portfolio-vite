import React from "react";
import "./ProjectCardComponent.css";

const ProjectCardComponent = ({ project , index }) => {
  return (
    <div className="project-card" style={{}} /*style={{ gridColumnStart: (index%2)+1, gridRowStart: index+1, ...(index % 2 === 1 && { justifySelf: "end" , alignItems: "end"  }) }}*/ >
      <h3>{project.name}</h3>
      <div className="project-card-wrapper" >
        <img src={project.image} alt={project.name} />
      </div>
      <p>{project.longDescription}</p>
      <div className="project-source-wrapper">
        {project.github ? (
          <a className="source-link" href={project.github} target="_blank" rel="noopener noreferrer">
            Voir le code source
          </a>
        ) : (
          <p>Code source non disponible</p>
        )}
        {project.links ? (
          <a className="project-link" href={project.links} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        ) : (
          <p>Projet non disponible</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCardComponent;