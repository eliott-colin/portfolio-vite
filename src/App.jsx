import "./index.css";
import router from "./router/router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();
  const currentPage = (location.pathname.split('/')[1] || 'home').toLowerCase();
  return (
    <div className={`${currentPage}`}>
    <SpeedInsights/>
    <Analytics/>
    
    <Outlet context={{ currentPage }}/>
    </div>
  );
}

export default App;


