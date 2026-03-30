import "./index.css";
import router from "./router/router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './App.css';

function App(props) {
  const location = useLocation();
  const currentPage = (location.pathname.split('/')[1] || 'home').toLowerCase();
  console.log("Current page:", currentPage);
  return (
    <div className={`${currentPage}`}>
    <SpeedInsights/>
    <Analytics/>
    
    <Outlet />
    </div>
  );
}

export default App;


