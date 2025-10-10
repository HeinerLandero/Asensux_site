import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Productos from "../pages/Productos/Productos";
import ProductDetail from "../pages/Productos/Productos";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/nosotros", element: <About /> },
  { path: "/servicios", element: <Services /> },
  { path: "/productos", element: <Productos /> },
  { path: "/productos/:id", element: <ProductDetail /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contacto", element: <Contact /> },
];

export default routes;
