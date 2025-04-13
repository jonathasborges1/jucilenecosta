/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jucicostapsi.com.br', // Substitua pelo seu domínio real
  generateRobotsTxt: true,
  generateIndexSitemap: true, // útil para projetos com múltiplos sitemaps
  sitemapSize: 5000, // padrão 5000 - aumente se tiver muitas páginas
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/404', '/search'], // exclui rotas que não devem ser indexadas
  robotsTxtOptions: {
    additionalSitemaps: ['https://jucicostapsi.com.br/sitemap.xml',],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/search'],
      },
    ],
    
  },
}
