"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 md:px-12 bg-violet-50 text-gray-800"
    >
      {/* Título fixo conforme solicitado */}
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-violet-800 mb-8 text-center"
      >
        Sobre a Psicóloga
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem da psicóloga com efeito visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <Image
            src="/img/jucilene-perfil.jpg"
            alt="Psicóloga Jucilene Almeida da Costa"
            width={500}
            height={650}
            className="rounded-2xl shadow-xl mx-auto object-cover transform transition-transform duration-500 hover:scale-105"
            priority
          />
          {/* Destaques visuais */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              CRP 20/03418
            </span>
            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
              +10 anos de experiência
            </span>
          </div>
        </motion.div>

        {/* Texto + CTA + Destaques */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <article aria-labelledby="sobre-a-psicologa">
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Olá, sou <strong>Jucilene Almeida da Costa</strong>, psicóloga
              (CRP 20/03418) com ampla experiência no atendimento de{" "}
              <strong>adultos, adolescentes, mulheres e casais</strong>. Atendo
              presencialmente em Manaus-AM e online para todo o Brasil,
              Portugal, EUA e Inglaterra.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              Atuo com foco no cuidado da saúde emocional, auxiliando no
              enfrentamento de{" "}
              <strong>ansiedade, depressão, estresse e burnout</strong>. Minha
              abordagem é baseada em evidências, com destaque para a Terapia de
              Aceitação e Compromisso (ACT).
            </p>
          </article>

          {/* CTA WhatsApp */}
          <div className="mt-10 flex justify-center md:justify-start">
            <ContactCTA />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente reutilizável de CTA
function ContactCTA() {
  return (
    <a
      href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md transition"
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      {/* Efeito de ping sutil */}
      <span className="relative">
        <FaWhatsapp size={20} />
        <span className="absolute -top-1 -right-2 w-3 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
      </span>
      Agendar Atendimento
    </a>
  );
}
