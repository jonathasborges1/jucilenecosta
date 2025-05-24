"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      id="contato"
      aria-labelledby="contato-title"
      className="py-20 bg-[#e0c9ef]" // bg-white
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3
          id="contato-title"
          className="text-3xl md:text-4xl font-bold text-violet-700 mb-4"
        >
          Agende sua consulta
        </h3>
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Para dúvidas ou agendamentos, entre em contato pelos canais abaixo:
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            aria-label="Iniciar conversa via WhatsApp"
          >
            <Phone className="w-5 h-5" />
            WhatsApp: (92) 9 8248-2803
          </a>

          <a
            href="mailto:contatosamedh@gmail.com"
            className="inline-flex items-center gap-2 bg-violet-100 hover:bg-violet-200 text-violet-700 font-medium px-5 py-3 rounded-full shadow-sm transition"
          >
            <Mail className="w-5 h-5" />
            contatosamedh@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
