import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Projects from "../pages/ProjectsPage/Projects.jsx";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/skills",
        element: <Skills />
      }
    ]
  }
]);

export default router;
