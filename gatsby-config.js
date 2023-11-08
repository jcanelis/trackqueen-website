if (process.env.NODE_ENV !== "production") {
  console.log("Building in development mode.")
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    title: "TrackQueen",
    siteUrl: "https://trackqueen.app",
    description: "Learn more about your music.",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-sqip",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: "100%",
              ratio: 1.78,
              height: 405,
              related: false,
              noIframeBorder: true,
              loadingStrategy: "lazy",
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: "embedVideoContainer",
            },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 716,
              linkImagesToOriginal: true,
              showCaptions: true,
              withWebp: true,
              backgroundColor: "#222222",
              wrapperStyle:
                "box-shadow: rgba(0, 0, 0, 0.02) 0px 2.8px 2.2px, rgba(0, 0, 0, 0.027) 0px 6.7px 5.3px, rgba(0, 0, 0, 0.035) 0px 12.5px 10px, rgba(0, 0, 0, 0.043) 0px 22.3px 17.9px, rgba(0, 0, 0, 0.05) 0px 41.8px 33.4px, rgba(0, 0, 0, 0.07) 0px 100px 80px;",
              loading: "lazy",
            },
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
