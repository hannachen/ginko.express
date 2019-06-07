require('dotenv').config();
const siteAddress = new URL(process.env.APP_URL);

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display', 'Roboto']
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema Query type
        typeName: "Menu",
        // Accessible as field
        fieldName: "menu",
        url: process.env.DATA_URL,
        headers: {
          "x-api-key": process.env.AWS_APPSYNC_API_KEY
        },
        refetchInterval: 30,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    }
  ],
}
