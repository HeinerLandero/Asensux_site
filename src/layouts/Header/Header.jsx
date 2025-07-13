import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-richBlack/90 backdrop-blur-sm text-antiFlashWhite shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-caribbeanGreen tracking-wide">
          Asensux
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative px-3 py-2 text-base font-medium transition duration-300
                 ${isActive ? 'text-caribbeanGreen' : 'text-antiFlashWhite hover:text-caribbeanGreen'}
                 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0
                 after:h-[2px] after:bg-caribbeanGreen hover:after:w-full after:transition-all after:duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-antiFlashWhite focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
        <div className="md:hidden bg-richBlack/95 backdrop-blur-md px-4 pb-6 pt-2 space-y-3 text-center z-40 shadow-md transition-all duration-300">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium text-lg transition duration-300
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
