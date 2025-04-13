/* Arquivo: /app/page.tsx */

import { Metadata } from "next";

import { HeroSection } from "@/components/sections/hero/HeroSection";

import AboutSection from "@/components/sections/about/About";
import SpecialtiesSection from "@/components/sections/specialties/Specialties";
import ContactSection from "@/components/sections/contact/Contact";
import FAQSection from "@/components/sections/faq/Faq";

import { URL_BASE } from "./layout";

// ✅ Metadados da Home (Next.js 15 App Router)
export const metadata: Metadata = {
  title: "Psicóloga em Manaus - Atendimento Online e Presencial",
  description:
    "Ansiedade, depressão, burnout. Atendimento presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra. Agende sua consulta com a psicóloga Jucilene Almeida da Costa.",
  keywords: [
    "Psicóloga em Manaus",
    "terapia online",
    "atendimento psicológico",
    "tratamento ansiedade",
    "depressão",
    "burnout",
    "psicoterapia Manaus",
  ],
  category: "Saúde Mental",
  creator: "Jucilene Almeida da Costa",
  alternates: {
    canonical: URL_BASE,
  },
  openGraph: {
    title: "Psicóloga em Manaus - Atendimento Online e Presencial",
    description:
      "Atendimento psicológico com foco em saúde mental. Presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra.",
    url: URL_BASE,
    siteName: "Jucilene Almeida da Costa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${URL_BASE}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Imagem da psicóloga Jucilene Costa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga em Manaus - Atendimento Online e Presencial",
    description:
      "Psicoterapia com foco em ansiedade, depressão e burnout. Atendimento presencial e online com a psicóloga Jucilene Almeida da Costa.",
    images: [`${URL_BASE}/og-image.jpg`],
  },
};

export default function Home() {
  return (
    <main role="main">
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
