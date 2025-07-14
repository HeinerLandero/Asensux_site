import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="bg-darkGreen text-antiFlashWhite py-10 border-t border-richBlack">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-caribbeanGreen">kambio</span>. Todos los derechos reservados.
        </p>

        <ul className="flex space-x-6 text-sm">
          <li>
            <Link
              to="/nosotros"
              className="hover:text-caribbeanGreen transition-colors duration-300"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="hover:text-caribbeanGreen transition-colors duration-300"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="hover:text-caribbeanGreen transition-colors duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 text-lg">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-caribbeanGreen transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-caribbeanGreen transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-caribbeanGreen transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
