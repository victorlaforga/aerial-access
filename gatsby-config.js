module.exports = {
  siteMetadata: {
    title: "aerial-access",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "NNDV4Wa-ZFq-kAeqFAKbblBQwJOtKMkZ2ljt9SUU79w",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
