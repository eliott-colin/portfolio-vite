import React from "react";
import ProjectCardComponent from "../ProjectCardComponent/ProjectCardComponent.jsx";
import "./ProjectsListCompenent.css";



const ProjectsListComponent = ({ projects }) => {
    return (
        <div className="projects-list">
            
            <div className="projects-list-wrapper">
            {projects.map((project, index) => (
                <ProjectCardComponent key={index} project={project} index={index} />
                    
            ))}
            </div>
        </div>
    );
}

export default ProjectsListComponent;