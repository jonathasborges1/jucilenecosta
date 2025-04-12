"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "As consultas são sigilosas?",
    answer:
      "Sim. Todas as informações compartilhadas durante as sessões são protegidas por sigilo profissional, conforme o Código de Ética do Psicólogo.",
  },
  {
    question: "Qual a duração de cada sessão?",
    answer:
      "Cada sessão tem duração média de 50 minutos a 1 hora, respeitando o tempo necessário para cada atendimento.",
  },
  {
    question: "É possível fazer terapia online?",
    answer:
      "Sim, atendo online para todo o Brasil e também para brasileiros que moram em Portugal, EUA e Inglaterra.",
  },
  {
    question: "O atendimento é apenas para mulheres?",
    answer:
      "Não. Atendo adolescentes, mulheres, adultos em geral e casais, respeitando as individualidades e demandas de cada um.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 md:px-12 bg-violet-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-violet-800 mb-10 text-center">
          Perguntas Frequentes
        </h2>

        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-lg text-violet-800"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 text-gray-600 text-base"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
