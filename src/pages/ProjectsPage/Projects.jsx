import React from 'react';
import ProjectsListComponent from '../../components/ProjectListComponent/ProjectsListComponent.jsx';
import LinksImages from '../../data/links.json';
import Header from '../../components/Header.jsx';
import './Projects.css';

const ProjectsPage = () => {
  return (
    <div>
      <div style={{paddingLeft: "5%",paddingRight: "5%"}}>
        <Header currentPage="projects"/>
      </div>
      <ProjectsListComponent projects={LinksImages} />
    </div>
  );
};

export default ProjectsPage;