import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import cat from "../assets/drag.jpg";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function Header(): JSX.Element {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Helper component for navigation links
  const NavLink = ({ to, children }: NavLinkProps): JSX.Element => (
    <Link 
      to={to}
      className={`transition-colors ${
        currentPath === to
          ? "text-gray-900 font-medium"
          : "text-gray-900 hover:text-gray-700 underline decoration-gray-300 underline-offset-4"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="relative py-6 px-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={cat} className="w-8 h-8 rounded-sm" alt="Profile" />
          <div>
            <h3 className="font-medium">Samuel Aboderin</h3>
            <p className="text-sm text-gray-600">Software Engineer (ML)</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>

        {/* Status Badge */}
        <div className="hidden md:block bg-amber-50 px-3 py-1.5 rounded-full">
          <p className="text-amber-900 font-medium tracking-wide text-sm whitespace-nowrap">
            🚀 Somewhere building stuff
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/research">Research</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}