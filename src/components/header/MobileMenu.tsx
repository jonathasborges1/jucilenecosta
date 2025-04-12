// Arquivo: /components/Header/MobileMenu.tsx

import { navLinks } from "./NavLinkList";

interface MobileMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden px-4 pb-4 transition-all duration-300">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="block py-2 text-gray-700 hover:text-violet-700"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
