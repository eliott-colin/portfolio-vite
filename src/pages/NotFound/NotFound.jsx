import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import '../page.css';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page introuvable | Eliott Colin';
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main className="not-found">
        <h1 className="page-title">404</h1>
        <p className="page-subtitle">Cette page n’existe pas ou a été déplacée.</p>
        <Link className="not-found-link" to="/">Retour à l’accueil</Link>
      </main>
    </div>
  );
};

export default NotFound;
