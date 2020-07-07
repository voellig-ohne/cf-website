require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet-async',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `sa2fzfna8ry2`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
    ],
};
