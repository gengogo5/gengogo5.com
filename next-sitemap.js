module.exports = {
  siteUrl: process.env.HOST || 'https://gengogo5.com',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  exclude: ['/categories/*'],
  outDir: './out'
}
