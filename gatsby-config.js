module.exports = {
    siteMetadata: {
      title: `Floatist`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-image", // render images
      "gatsby-plugin-sharp", // render images
      "gatsby-transformer-sharp", // get images through graphql
      {
        resolve: "gatsby-source-filesystem", // query data using graphql
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      "gatsby-plugin-mdx", // render mdx content
      "gatsby-remark-images", // For responsive images within mdx content
      "gatsby-remark-autolink-headers", // To automatically create links in mdx content
      "gatsby-plugin-styled-components"
    ]
}