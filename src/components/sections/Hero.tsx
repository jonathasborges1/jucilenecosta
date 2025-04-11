"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // 👈 importação do ícone

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-green-100 via-white to-violet-100 py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna do texto */}
        <div className="text-center lg:text-left">
          <div className="inline-block mb-4 px-5 py-1 rounded-full text-sm font-semibold bg-green-200 text-green-800 uppercase tracking-wider">
            Atendimento Online e Presencial
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-900">
            Jucilene Costa
          </h1>
          <p className="mt-1 text-xl md:text-2xl font-semibold text-green-900">
            Psicóloga Clínica — CRP 20/03418
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
            Por meio de sessões de <strong>terapia online e presencial</strong>{" "}
            em Manaus, te ajudo a cultivar o <strong>autoconhecimento</strong>,
            fortalecer sua <strong>saúde mental</strong> e promover equilíbrio
            emocional em sua vida.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              <FaWhatsapp className="w-5 h-5" />

              <span>Agendar Atendimento</span>
            </Link>
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/img/juci.jpg"
            alt="Psicóloga Jucilene Almêda da Costa"
            width={480}
            height={600}
            priority
            className="rounded-xl object-cover max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
