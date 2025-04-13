import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Necessário para Cloudflare Pages
  distDir: "out", // Define o diretório de saída para "out"
  compress: true, // Gzip habilitado
  images: {
    unoptimized: true, // Obrigatorio para funcionar
  },
};

export default nextConfig;
