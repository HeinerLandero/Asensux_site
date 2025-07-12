import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
// import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<Projects />} />
          {/* <Route path="proyectos/:id" element={<ProjectDetail />} /> */}
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}