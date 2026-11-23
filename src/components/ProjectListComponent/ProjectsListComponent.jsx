import ProjectCardComponent from "../ProjectCardComponent/ProjectCardComponent.jsx";
import "./ProjectsListCompenent.css";

const ProjectsListComponent = ({ projects }) => (
  <div className="projects-list-wrapper">
    {projects.map((project) => (
      <ProjectCardComponent key={project.title} project={project} />
    ))}
  </div>
);

export default ProjectsListComponent;
