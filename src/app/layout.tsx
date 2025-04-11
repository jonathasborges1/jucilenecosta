/* Arquivo: /app/layout.tsx */

import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaWhatsApp } from "@/components/CtaWhatsApp";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Psicóloga em Manaus - Jucilene Almeida da Costa",
  description:
    "Atendimento psicológico presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra. Especialista em ansiedade, depressão e burnout.",
  metadataBase: new URL("https://jucilenecosta.com.br"),
  openGraph: {
    title: "Psicóloga em Manaus - Jucilene Almeida da Costa",
    description:
      "Atendimento psicológico online e presencial com foco em saúde mental e bem-estar. Psicoterapia para ansiedade, depressão e burnout.",
    url: "https://jucilenecosta.com.br",
    siteName: "Jucilene Almeida da Costa",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jucilene Almeida da Costa",
              image: "https://jucilenecosta.com.br/og-image.jpg",
              "@id": "https://jucilenecosta.com.br",
              url: "https://jucilenecosta.com.br",
              telephone: "+5592982482803",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manaus",
                addressRegion: "AM",
                addressCountry: "BR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <CtaWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
