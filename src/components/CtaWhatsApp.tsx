/* Arquivo: /components/CtaWhatsApp.tsx */

"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function CtaWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/5592982482803"
        target="_blank"
        className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg transition-all hover:bg-green-700"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* <MessageCircle size={20} /> */}
        Agendar pelo WhatsApp
        <FaWhatsapp className="w-5 h-5" />
      </Link>
    </div>
  );
}
