"use client";

import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import("./Faq"), {
  ssr: true,
  loading: () => <p>Carregando perguntas frequentes...</p>,
});

export default FAQSection;
