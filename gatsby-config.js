module.exports = {
  siteMetadata: {
    title: "Vlad Breus Blog",
    publicUrl: "https://www.vbr.eus",
    siteUrl: "https://www.vbr.eus"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vlad Breus Blog',
        short_name: 'VB Blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merriweather\:400,400i,700,700i`,
          `Roboto\:400,400i,700,700i`,
          `Lato\:400,400i,700,700i`,
          `Playfair Display\:400,400i,700,700i`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.vbr.eus',
        sitemap: 'https://www.vbr.eus/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'script-src': `'self' 'unsafe-inline' data: www.google-analytics.com`,
          'style-src': `'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com`,
          'img-src': `'self' data: www.google-analytics.com`,
          'font-src': `'self' data: fonts.gstatic.com`,
        },
      },
    },
  ],
};