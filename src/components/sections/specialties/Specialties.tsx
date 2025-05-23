"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const specialties = [
  {
    title: "Ansiedade",
    desc: "Gerencie pensamentos acelerados e preocupações constantes.",
  },
  {
    title: "Depressão",
    desc: "Apoio no enfrentamento da tristeza profunda e falta de motivação.",
  },
  {
    title: "Autoconhecimento e equilíbrio emocional",
    desc: "Desenvolva consciência emocional e fortaleça sua identidade pessoal.",
  },
  {
    title: "Cromoterapia",
    desc: "Prática complementar que utiliza luzes de diferentes cores para promover o equilíbrio físico, emocional e energético. Reconhecida pela OMS.",
  },
  {
    title: "Barras de Access",
    desc: "Terapia corporal que utiliza toques suaves em 32 pontos da cabeça, com o objetivo de promover o equilíbrio entre mente e corpo.",
  },
  {
    title: "Facelift Access",
    desc: "Técnica energética que visa rejuvenescer o rosto e o corpo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SpecialtyItem({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.li
      variants={itemVariants}
      className="group flex flex-row-reverse sm:flex-row gap-3 items-start bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <CheckCircle className="w-6 h-6 text-green-600 group-hover:text-green-700 mt-1" />
      <div>
        <h4 className="font-semibold text-violet-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </motion.li>
  );
}

export default function SpecialtiesSection() {
  return (
    <motion.section
      id="especialidades"
      aria-labelledby="especialidades-title"
      role="region"
      className="py-20 bg-gradient-to-b from-[#e0f7fa] to-[#e6d7f0]" // from-[#f3eaf7] via-[#e6d7f0] to-[#f3eaf7]
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h3
            id="especialidades-title"
            className="text-3xl md:text-4xl font-bold text-violet-700"
          >
            Especialidades
          </h3>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Abordagem clínica Integrativa, atravessada pela ética da Terapia
            Sistêmica, no que tange o cuidado da saúde integral: Corpo. Mente e
            Espírito.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Adolescentes", "Adultos", "Casal", "Família"].map((label) => (
              <span
                key={label}
                className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {specialties.map((item, index) => (
            <SpecialtyItem key={index} title={item.title} desc={item.desc} />
          ))}
        </motion.ul>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-300 hover:bg-violet-400 text-black font-medium py-3 px-6 rounded-full text-lg shadow-md transition"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            <FaWhatsapp size={20} /> Agendar Atendimento
          </a>
        </div>
      </div>
    </motion.section>
  );
}
