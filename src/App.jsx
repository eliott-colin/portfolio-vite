import "./index.css";
import router from "./router/router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <SpeedInsights/>
    <Analytics/>
    
    <Outlet />
    </div>
  );
}

export default App;


