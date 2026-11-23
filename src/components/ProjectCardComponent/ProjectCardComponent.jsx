import "./ProjectCardComponent.css";

const ProjectCardComponent = ({ project }) => {
  return (
    <article className="project-card">
      <h2 className="project-card-title">{project.title}</h2>
      <div className="project-card-wrapper">
        <img src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
      </div>
      <p className="project-card-description">{project.longDescription}</p>
      <div className="project-source-wrapper">
        {project.github ? (
          <a className="project-btn project-btn-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
            Code source
          </a>
        ) : (
          <span className="project-btn project-btn-disabled" aria-disabled="true">Code source privé</span>
        )}
        {project.links ? (
          <a className="project-btn project-btn-primary" href={project.links} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        ) : (
          <span className="project-btn project-btn-disabled" aria-disabled="true">Projet non disponible</span>
        )}
      </div>
    </article>
  );
};

export default ProjectCardComponent;
