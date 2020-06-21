/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/_data/pages`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        // siteURL is a must for sitemap generation
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
}
