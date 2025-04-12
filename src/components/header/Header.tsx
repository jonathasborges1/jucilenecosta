"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-violet-700"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
