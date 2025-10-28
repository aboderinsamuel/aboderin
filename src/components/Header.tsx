import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function Header(): JSX.Element {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) // Close if click is outside of the header
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavLink = ({ to, children }: NavLinkProps): JSX.Element => (
    <Link
      to={to}
      className={`transition-colors ${
        currentPath === to
          ? "text-gray-900"
          : "text-gray-900 hover:text-gray-700 underline"
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header ref={headerRef} className="relative py-6 px-4 sm:px-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <h3 className="font-medium">Samuel Aboderin</h3>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/me">me</NavLink>
          <NavLink to="/credentials">credentials</NavLink>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 underline"
          >
            resume
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50"
          ref={menuRef}
        >
          <div className="flex flex-col p-4 space-y-4">
            <NavLink to="/me">me</NavLink>
            <NavLink to="/credentials">credentials</NavLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 underline"
              onClick={() => setIsMenuOpen(false)}
            >
              resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
