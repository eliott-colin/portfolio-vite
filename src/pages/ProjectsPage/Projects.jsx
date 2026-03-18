import React from 'react';
import ProjectsListComponent from '../../components/ProjectListComponent/ProjectsListComponent.jsx';
import LinksImages from '../../data/links.json';
import './Projects.css';

const ProjectsPage = () => {
  return (
    <div className='body'>
      <h1>Projects</h1>
      <ProjectsListComponent projects={LinksImages} />
    </div>
  );
};

export default ProjectsPage;