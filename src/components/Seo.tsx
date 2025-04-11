/* Arquivo: /components/Seo.tsx */

import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export function Seo({ title, description, canonical }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}
