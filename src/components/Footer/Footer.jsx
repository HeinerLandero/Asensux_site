import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Kambio. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </footer>
  );
}