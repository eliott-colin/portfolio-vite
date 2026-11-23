import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "./App.css";

const KNOWN_PAGES = ["home", "projects", "contact"];

function App() {
  const location = useLocation();
  const segment = (location.pathname.split("/")[1] || "home").toLowerCase();
  const currentPage = KNOWN_PAGES.includes(segment) ? segment : "home";

  return (
    <div className={`page-bg ${currentPage}`}>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SpeedInsights />
      <Analytics />
      <div id="contenu">
        <Outlet context={{ currentPage }} />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default App;
