module.exports = {
  siteMetadata: {
    title: `DEVSTYLE`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Quentin Lecocq`,
    bio: `Dév JavaScript | React | Autodidacte. Créateur du blog DevStyle. J'en apprend un peu plus chaque jour`,
    authorImage: `https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // ajout d'un plugin pour charger les articles en markdown dans le dossier blog
    // name = nom du dossier où gatsby va aller chercher les articles
    // path = le chemin à prendre pour gatsby
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/blog/`},
    },
    // ajout du plugin pour transformer les articles markdown en fichier lisible par notre site
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: require("./src/theme/antd.js"),
        // Needed to load antdesign less files.
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        // Activate less files
        style: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
