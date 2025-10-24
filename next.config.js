/**
 * Configuração do Next.js para exportação estática e Cloudflare Pages.
 * - O Cloudflare Pages hospeda sites estáticos; por isso, definimos `output: 'export'`.
 * - `reactStrictMode: true` ajuda a identificar problemas em desenvolvimento.
 * - `images.unoptimized: true` evita otimização de imagens em tempo de execução (não suportada pelo Pages).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
