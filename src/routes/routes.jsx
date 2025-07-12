import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import ProjectDetail from "../pages/Projects/Projects";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/nosotros", element: <About /> },
  { path: "/servicios", element: <Services /> },
  { path: "/proyectos", element: <Projects /> },
  { path: "/proyectos/:id", element: <ProjectDetail /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contacto", element: <Contact /> },
];

export default routes;
