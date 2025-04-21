/* Arquivo: /app/layout.tsx */

import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

import ClientWrapper from "@/components/ClientWrapper";

import { Header } from "@/components/header/Header";
import { CtaWhatsApp } from "@/components/CtaWhatsApp";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const URL_BASE = "https://jucilenecosta.com.br";

export const metadata: Metadata = {
  title: {
    default: "Psicóloga em Manaus - Jucilene Almêda da Costa",
    template: "%s | Psicóloga em Manaus - Jucilene Costa",
  },
  description:
    "Atendimento psicológico presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra. Especialista em ansiedade, depressão e burnout.",
  metadataBase: new URL(URL_BASE),
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Psicóloga em Manaus - Jucilene Almêda da Costa",
    description:
      "Atendimento psicológico online e presencial com foco em saúde mental e bem-estar. Psicoterapia para ansiedade, depressão e burnout.",
    url: URL_BASE,
    siteName: "Jucilene Almêda da Costa",
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
      "Psicoterapia para ansiedade, depressão e burnout. Presencial em Manaus e online para Brasil, Portugal, EUA e Inglaterra.",
    images: [`${URL_BASE}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" prefix="og: http://ogp.me/ns#" typeof="WebPage">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jucilene Almêda da Costa",
              image: `${URL_BASE}/og-image.jpg`,
              "@id": URL_BASE,
              url: URL_BASE,
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
              sameAs: [
                "https://www.instagram.com/psicologajucilenecosta",
                "https://www.facebook.com/psicologajucilenecosta",
              ],
            }),
          }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <CtaWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
