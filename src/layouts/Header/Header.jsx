import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import '../../layouts/Header/Header.scss';
import { NavLink } from "react-router-dom";
import logoDesktop from "@/assets/logos/main-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  const allLinks = [
    { to: "/", label: "Inicio", end: true },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
    { to: "/blog", label: "Blog" },
    { to: "/productos", label: "Productos" },
    { to: "/portafolio", label: "Portafolio" },
    { to: "/contacto", label: "Contacto" },
  ];

  const navLinksLeft = allLinks.slice(0, 3);
  const navLinksRight = allLinks.slice(3);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass text-antiFlashWhite transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 lg:py-4 flex justify-between items-center relative">
        {/* Desktop Navigation - Left */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinksLeft.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className="relative px-3 py-2">
              {({ isActive }) => (
                <span className="relative z-10 text-sm font-medium whitespace-nowrap transition-colors duration-300 text-antiFlashWhite">
                  {isActive && (
                    <motion.span
                      layoutId="navIndicatorLeft"
                      className="absolute inset-0 bg-electricBlue/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </span>
              )}
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
        <nav className="hidden lg:flex items-center gap-1">
          {navLinksRight.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className="relative px-3 py-2">
              {({ isActive }) => (
                <span className="relative z-10 text-sm font-medium whitespace-nowrap transition-colors duration-300 text-antiFlashWhite">
                  {isActive && (
                    <motion.span
                      layoutId="navIndicatorRight"
                      className="absolute inset-0 bg-electricBlue/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
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

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => { setIsMenuOpen(false); toggleRef.current?.focus(); }}
          aria-hidden
        />
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-16 left-0 right-0 lg:hidden glass px-4 pb-6 pt-2 space-y-3 text-center z-40 transition-all duration-300"
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
