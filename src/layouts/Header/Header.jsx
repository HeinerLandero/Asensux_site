import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio", end: true },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/blog", label: "Blog" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="header fixed w-full z-1 bg-richBlack text-antiFlashWhite shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-caribbeanGreen tracking-wide">
          Asensux
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 ">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative px-3 py-2 text-base font-medium transition-colors duration-300
                ${isActive ? 'text-caribbeanGreen after:w-full' : 'text-antiFlashWhite hover:text-caribbeanGreen'}
                after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0
                after:bg-caribbeanGreen after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none bg-gradient-to-r from-richBlack to-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation (expandible) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-richBlack to-black px-4 pb-4 space-y-2 bg-richBlack text-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium transition-colors duration-300
                ${isActive ? 'text-caribbeanGreen' : 'text-antiFlashWhite hover:text-caribbeanGreen'}`
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
