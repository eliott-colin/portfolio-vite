import { useEffect } from 'react';
import ProjectsListComponent from '../../components/ProjectListComponent/ProjectsListComponent.jsx';
import LinksImages from '../../data/links.json';
import Header from '../../components/Header.jsx';
import '../page.css';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projets | Eliott Colin';
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main>
        <h1 className="page-title">Projets</h1>
        <p className="page-subtitle">Une sélection de projets personnels, scolaires et professionnels.</p>
        <ProjectsListComponent projects={LinksImages} />
      </main>
    </div>
  );
};

export default ProjectsPage;
