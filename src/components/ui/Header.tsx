'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const sections = ["home", "skills", "projetos", "contato"];

export default function Header({ activeSection, scrollToSection }: HeaderProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            CV
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item
                    ? "text-cyan-400"
                    : "text-slate-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <div
                className={`w-6 h-0.5 bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <div
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >

            <div className="px-4 py-4 space-y-3">

              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className="block w-full text-left capitalize text-slate-300 hover:text-cyan-400 py-2"
                >
                  {item}
                </button>
              ))}

            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </nav>
  );
}