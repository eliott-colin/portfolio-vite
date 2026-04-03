import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Projects from "../pages/ProjectsPage/Projects.jsx";
//import Skills from "../pages/Skills";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";

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
      // {
      //   path: "/skills",
      //   element: <Skills />
      // }
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
]);

export default router;
