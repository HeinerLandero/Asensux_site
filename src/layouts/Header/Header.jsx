import { useState } from "react";
import '../../layouts/Header/Header.scss';
import { Link, NavLink } from "react-router-dom";
import logoDesktop from "@/assets/logos/main-logo.png";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinksLeft = [
    { to: "/", label: "Inicio", end: true },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
  ];

  const navLinksRight = [
    { to: "/productos", label: "Productos" },
    { to: "/portafolio", label: "Portafolio" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass text-antiFlashWhite transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 lg:py-4 flex justify-between items-center relative">
        {/* Desktop Navigation - Left */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinksLeft.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link-underline py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive ? "text-electricBlue" : "text-antiFlashWhite"}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Logo - Center */}
        <img
          src={logoDesktop}
          alt="Logo Asensux"
          className="w-36 lg:w-44 drop-shadow-lg absolute left-1/2 -translate-x-1/2"
          decoding="async"
        />


        {/* Desktop Navigation - Right */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinksRight.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link-underline py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive ? "text-electricBlue" : "text-antiFlashWhite"}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-antiFlashWhite focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glass px-4 pb-6 pt-2 space-y-3 text-center z-40 transition-all duration-300"
        >
          {[...navLinksLeft, ...navLinksRight].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium text-lg transition duration-300
                 ${isActive ? 'text-electricBlue' : 'text-antiFlashWhite hover:text-electricBlue'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
