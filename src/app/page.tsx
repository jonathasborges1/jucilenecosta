/* Arquivo: /app/page.tsx */

import { Seo } from "@/components/Seo";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SpecialtiesSection } from "@/components/sections/Specialties";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Seo
        title="Psicóloga em Manaus - Atendimento Online e Presencial"
        description="Ansiedade, depressão, burnout. Atendimento presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra. Agende sua consulta com a psicóloga Jucilene Almeida da Costa."
        canonical="https://jucilenecosta.com.br"
      />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ContactSection />
    </>
  );
}
