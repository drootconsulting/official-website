module.exports = {
  siteUrl: 'https://droot.in',
  exclude: ['/others'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  additionalSitemaps: [
    {
      url: '/custom-sitemap.xml',
      priority: 0.5,
      changefreq: 'weekly',
      lastmod: '2022-02-16T17:59:03.000Z',
    },
  ],
}