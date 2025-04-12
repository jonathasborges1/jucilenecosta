// Arquivo: /components/Header/NavLinks.tsx

import { navLinks } from "./NavLinkList";

export function NavLinks() {
  return (
    <nav className="flex gap-6 text-sm text-gray-700 font-medium">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hover:text-violet-700 transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
