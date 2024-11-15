import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "./Link";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import cat from "../assets/drag.jpg";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative py-6 px-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <User className="w-8 h-8" /> */}
          <img src ={cat}
          className="w-8 h-8 rounded-sm" />
          <div>
            <h3 className="font-medium">Samuel Aboderin</h3>
            <p className="text-sm text-gray-600">Software Engineer (ML)</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" active={currentPath === "/"}>
            Home
          </Link>
          <Link href="/about" active={currentPath === "/about"}>
            About
          </Link>
          <Link href="/research" active={currentPath === "/research"}>
            Research
          </Link>
          <Link href="/projects" active={currentPath === "/projects"}>
            Projects
          </Link>
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
              <Link href="/" active={currentPath === "/"}>
                Home
              </Link>
              <Link href="/about" active={currentPath === "/about"}>
                About
              </Link>
              <Link href="/research" active={currentPath === "/research"}>
                Research
              </Link>
              <Link href="/projects" active={currentPath === "/projects"}>
                Projects
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
