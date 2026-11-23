import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Projects from "../pages/ProjectsPage/Projects.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
