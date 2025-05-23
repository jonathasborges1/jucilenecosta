import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="py-20 px-4 sm:px-6 md:px-12 bg-[#eff6f7] text-gray-800" //  bg-violet-50
    >
      {/* Título fixo conforme solicitado */}
      <AnimateOnScroll animationClass="animate-fadeInDown">
        <h2
          id="sobre-title"
          className="text-3xl sm:text-4xl font-extrabold text-violet-800 mb-8 text-center animate-fadeInRight"
        >
          Sobre a Psicóloga
        </h2>
      </AnimateOnScroll>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fadeInLeft">
        {/* Imagem da psicóloga com efeito visual */}
        <div className="flex flex-col gap-6">
          <Image
            src="/img/jucilene-perfil.jpg"
            alt="Psicóloga Jucilene Almêda da Costa"
            width={500}
            height={650}
            className="rounded-2xl shadow-xl mx-auto object-cover transform transition-transform duration-500 hover:scale-105"
            priority
          />

          {/* Destaques visuais */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-all duration-500">
              CRP 20/03418
            </span>
            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
              +10 anos de experiência
            </span>
          </div>
        </div>

        {/* Texto + CTA + Destaques */}
        <div className="animate-fadeInRight">
          <article aria-labelledby="sobre-a-psicologa">
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Psicóloga Clínica, formada pelo Centro Universitário Nilton Lins
              em 2008. Terapeuta Integrativa desde 2021, nas práticas de{" "}
              <strong>Barras de Access, Facelift Access, Cromoterapia</strong> e
              outros, além de cursar Neurociência do Desenvolvimento Humano pela
              Escola de Mediadores.
            </p>
          </article>

          {/* CTA WhatsApp */}
          <div className="mt-10 flex justify-center md:justify-start">
            <ContactCTA />
          </div>
        </div>
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
      // className="relative inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md transition"
      className="group relative inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-500"
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      {/* Efeito de ping sutil */}
      <span className="relative">
        {/* <FaWhatsapp size={20} /> */}
        <FaWhatsapp
          size={20}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        <span
          className="absolute -top-1 -right-3 w-3 flex size-3"
          aria-hidden="true"
        >
          <span
            className="absolute -top-1 h-full w-full rounded-full bg-green-400 opacity-75 animate-pingSlow"
            style={{ right: "2px", top: "-2px" }}
          ></span>
          <span className="relative size-2 rounded-full bg-green-500"></span>
        </span>
      </span>
      Agendar Atendimento
    </a>
  );
}
